import * as React from "react";

import {
  Box,
  Drawer,
  CssBaseline,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Badge,
  Tooltip,
  Popover,
  colors,
  styled,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
import SegmentIcon from "@mui/icons-material/Segment";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import BarChartIcon from "@mui/icons-material/BarChart";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import SummarizeIcon from "@mui/icons-material/Summarize";

import Home from "./Home";
import Appointments from "./Appointments";

import "@fontsource/cabin/600.css";

const drawerWidth = 240;
const menu = [
  "Home",
  "Appointments",
  "Check Patient",
  "Health Records",
  "Medicine Store",
  "Medicals",
  "Analysis",
  "Settings",
];

// app bar style
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// header style
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "20px 12px",
  justifyContent: "space-between",
}));

// container style
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

export default function NavigationDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState(0);
  const [content, setContent] = React.useState(<Home />);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // open the drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // close the drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // drawer menu item click handle
  const handleMenuSelection = (index) => {
    setSelectedMenu(index);
    switch (index) {
      case 0:
        setContent(<Home />);
        break;
      case 1:
        setContent(<Appointments />);
        break;
      default:
        break;
    }
  };

  // open messages popover
  const handleMessagesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // close messages popover
  const handleMessagesClose = () => {
    setAnchorEl(null);
  };

  const openMessages = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {menu[selectedMenu]}
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <IconButton
              area-aria-describedby={id}
              onClick={handleMessagesClick}
            >
              <Tooltip title="Messages" placement="bottom">
                <Badge badgeContent={0} color="secondary">
                  <MailOutlineIcon color="action" />
                </Badge>
              </Tooltip>
            </IconButton>
            <Popover
              id={id}
              open={openMessages}
              anchorEl={anchorEl}
              onClose={handleMessagesClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
              <Divider />
              <Typography sx={{ p: 2 }}>No new messages.</Typography>
            </Popover>

            <Tooltip title="Notifications" placement="bottom">
              <Badge badgeContent={4} color="secondary" sx={{ ml: 2 }}>
                <NotificationsNoneIcon color="action" />
              </Badge>
            </Tooltip>
            <Avatar sx={{ bgcolor: colors.amber[300], ml: 3 }}>N</Avatar>
            <Typography sx={{ ml: 1 }}>Nayanajith Bandara</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box sx={{ display: "flex" }}>
            <img
              src="logo192.png"
              alt="Logo"
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontFamily="Cabin" letterSpacing="0.4rem">
                UNICARE
              </Typography>
              <Typography
                fontFamily="Cabin"
                fontSize="10px"
                letterSpacing="0.15rem"
              >
                EUSL SRI LANKA
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleMenuSelection(0)}
              sx={{
                ...(selectedMenu === 0 && {
                  backgroundColor: theme.selectedMenu,
                }),
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleMenuSelection(1)}
              sx={{
                ...(selectedMenu === 1 && {
                  backgroundColor: theme.selectedMenu,
                }),
              }}
            >
              <ListItemIcon>
                <SegmentIcon />
              </ListItemIcon>
              <ListItemText primary="Appointments" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleMenuSelection(2)}
              sx={{
                ...(selectedMenu === 2 && {
                  backgroundColor: theme.selectedMenu,
                }),
              }}
            >
              <ListItemIcon>
                <NoteAltIcon />
              </ListItemIcon>
              <ListItemText primary="Check Patient" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleMenuSelection(3)}
              sx={{
                ...(selectedMenu === 3 && {
                  backgroundColor: theme.selectedMenu,
                }),
              }}
            >
              <ListItemIcon>
                <MonitorHeartIcon />
              </ListItemIcon>
              <ListItemText primary="Health Records" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleMenuSelection(4)}
              sx={{
                ...(selectedMenu === 4 && {
                  backgroundColor: theme.selectedMenu,
                }),
              }}
            >
              <ListItemIcon>
                <MedicalServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Medicine Store" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleMenuSelection(5)}
              sx={{
                ...(selectedMenu === 5 && {
                  backgroundColor: theme.selectedMenu,
                }),
              }}
            >
              <ListItemIcon>
                <SummarizeIcon />
              </ListItemIcon>
              <ListItemText primary="Medicals" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleMenuSelection(6)}
              sx={{
                ...(selectedMenu === 6 && {
                  backgroundColor: theme.selectedMenu,
                }),
              }}
            >
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Analysis" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleMenuSelection(7)}
              sx={{
                ...(selectedMenu === 7 && {
                  backgroundColor: theme.selectedMenu,
                }),
              }}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Main open={open}>
        <Box height="64px" />
        {content}
      </Main>
    </Box>
  );
}
