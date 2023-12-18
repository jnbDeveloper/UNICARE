import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Typography,
  Avatar,
  Box,
  Button,
  Divider,
  Tabs,
  Tab,
  List,
  ListItem,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import WcIcon from "@mui/icons-material/Wc";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DoctorProfile() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Tabs value={tabIndex} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="General Information" />
        <Tab label="Change Password" />
      </Tabs>

      <Grid container spacing={2} display={tabIndex === 0 ? "flex" : "none"}>
        <Grid item md="4">
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" flexDirection="column">
                <Avatar
                  sx={{ width: "100px", height: "100px" }}
                  src="../../profile4.png"
                />
                <Typography mt={2} variant="h6">
                  Imashi Perera
                </Typography>
                <Typography
                  variant="body2"
                  color="text.disabled"
                  lineHeight={1}
                >
                  Doctor
                </Typography>
                <Typography variant="caption" textAlign="center" mt={2}>
                  Aliquip et tempor tempor do. Proident mollit duis deserunt in
                  reprehenderit minim veniam amet ad ipsum do deserunt. Irure
                  nostrud cupidatat eu nostrud consectetur minim ipsum ex esse.
                </Typography>
                <Divider />

                <List sx={{ mt: 2 }}>
                  <ListItem>
                    <Box display="flex" columnGap={1} alignItems="center">
                      <LocationOnIcon fontSize="small" />
                      <Typography variant="caption">
                        A 36/3 Thuththiripitiya watta, Edurapotha, Dewalegama
                      </Typography>
                    </Box>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <Box display="flex" columnGap={1} alignItems="center">
                      <PhoneIcon fontSize="small" />
                      <Typography variant="caption">+94 75 8122696</Typography>
                    </Box>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <Box display="flex" columnGap={1} alignItems="center">
                      <EmailIcon fontSize="small" />
                      <Typography variant="caption">
                        nayanajithofficial@gmail.com
                      </Typography>
                    </Box>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <Box display="flex" columnGap={1} alignItems="center">
                      <LocalHospitalIcon fontSize="small" />
                      <Typography variant="caption">SL-DR-5489893</Typography>
                    </Box>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <Box display="flex" columnGap={1} alignItems="center">
                      <WcIcon fontSize="small" />
                      <Typography variant="caption">Female</Typography>
                    </Box>
                  </ListItem>
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md="8">
          <Grid container spacing={2}>
            <Grid item xs="12" sm="6" md="12">
              <Card>
                <CardHeader title="Professional Information" />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs="12" sm="6">
                      <InputLabel>MC Registration Number *</InputLabel>
                      <TextField
                        size="small"
                        placeholder="MC Registration Number"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs="12" sm="6">
                      <InputLabel>Specialization</InputLabel>
                      <TextField
                        size="small"
                        placeholder="Specialization"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs="12" display="flex" justifyContent="right">
                      <Button variant="outlined" disabled>
                        Save Changes
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs="12" sm="6" md="12">
              <Card>
                <CardHeader title="General Information" />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs="12" md="6">
                      <InputLabel>First Name *</InputLabel>
                      <TextField
                        size="small"
                        placeholder="First Name"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs="12" md="6">
                      <InputLabel>Last Name *</InputLabel>
                      <TextField
                        size="small"
                        placeholder="Last Name"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs="12" md="6">
                      <InputLabel>Gender *</InputLabel>
                      <Select
                        size="small"
                        sx={{ width: "100%" }}
                        placeholder="Gender"
                      >
                        <MenuItem value={1}>Male</MenuItem>
                        <MenuItem value={2}>Female</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs="12" md="6">
                      <InputLabel>Birthday *</InputLabel>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          slotProps={{
                            textField: {
                              size: "small",
                              placeholder: "Birthday",
                            },
                          }}
                          sx={{ width: "100%" }}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs="12" md="6">
                      <InputLabel>Phone Number *</InputLabel>
                      <TextField
                        size="small"
                        placeholder="Phone Number"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs="12" md="6">
                      <InputLabel>Email Address *</InputLabel>
                      <TextField
                        size="small"
                        placeholder="Email Address"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs="12">
                      <InputLabel>Bio *</InputLabel>
                      <TextField
                        size="small"
                        placeholder="Bio"
                        multiline
                        rows={4}
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs="12" display="flex" justifyContent="right">
                      <Button variant="outlined" disabled>
                        Save Changes
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Card
        sx={{
          ...(tabIndex !== 1 && { display: "none" }),
        }}
      >
        <CardHeader title="Change Password" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs="12">
              <InputLabel>Current Password</InputLabel>
              <TextField
                size="small"
                placeholder="Current Password"
                type="password"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs="12" sm="6">
              <InputLabel>New Password</InputLabel>
              <TextField
                size="small"
                placeholder="New Password"
                type="password"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs="12" sm="6">
              <InputLabel>Confirm Password</InputLabel>
              <TextField
                size="small"
                placeholder="Confirm Password"
                type="password"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs="12" display="flex" justifyContent="right">
              <Button variant="outlined" disabled>
                Update Password
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
