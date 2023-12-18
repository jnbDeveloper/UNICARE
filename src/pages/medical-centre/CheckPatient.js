import {
  Grid,
  Divider,
  Card,
  CardContent,
  CardHeader,
  TextField,
  InputAdornment,
  Box,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import StudentCard from "../../components/StudentCard";
import HealthDetailCard from "../../components/HealthDetailCard";
import AppointmentCard from "../../components/AppointmentCard";
import "../../assets/css/Main.css";

import SearchIcon from "@mui/icons-material/Search";
import NumbersIcon from "@mui/icons-material/Numbers";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SchoolIcon from "@mui/icons-material/School";
import ScaleIcon from "@mui/icons-material/Scale";
import HeightIcon from "@mui/icons-material/Height";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import WcIcon from "@mui/icons-material/Wc";

export default function CheckPatient() {
  return (
    <Box display="flex" flexDirection="column" rowGap={2}>
      <Card
        className="check-patient-student-list"
        variant="outlined"
        sx={{
          display: "flex",
          boxShadow: "none",
          position: "absolute",
          top: "88px",
          left: "24px",
          bottom: "24px",
          width: "300px",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="stretch">
          <TextField
            placeholder="Search student..."
            variant="outlined"
            size="small"
            sx={{ margin: "16px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              overflowY: "auto",
              scrollbarWidth: "thin",
              "&::-webkit-scrollbar": {
                width: "5px",
                display: "none",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
                transition: "background-color 0.3s ease",
              },
              "&:hover::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(128, 128, 128, 0)",
              },
            }}
          >
            <Box display="flex" flexDirection="column">
              <StudentCard />
              <Divider />
              <StudentCard />
              <Divider />
              <StudentCard />
              <Divider />
              <StudentCard />
              <Divider />
              <StudentCard />
              <Divider />
              <StudentCard />
              <Divider />
              <StudentCard />
              <Divider />
              <StudentCard />
            </Box>
          </Box>
        </Box>
      </Card>

      <Card
        className="check-patient-content"
        variant="outlined"
        sx={{
          boxShadow: "none",
          position: "absolute",
          top: "88px",
          left: "340px",
          bottom: "24px",
          right: "24px",
          overflowY: "auto",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
            transition: "background-color 0.3s ease",
          },
          "&:hover::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(128, 128, 128, 0.5)",
          },
        }}
      >
        <CardHeader title="Selected Student" />
        <CardContent>
          <Box display="flex" columnGap={1}>
            <Avatar src="../../profile1.png" />
            <Box display="flex" flexDirection="column">
              <Typography variant="subtitle2">Imashi Perera</Typography>
              <Typography
                fontSize="10px"
                color="text.disabled"
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  WebkitLineClamp: 2,
                  textOverflow: "ellipsis",
                }}
              >
                Laborum deserunt aliquip nulla officia labore laboris ad in
                proident ut nisi exercitation. Esse excepteur duis nisi sit
                aliquip pariatur id ut. Nulla duis excepteur amet exercitation
                dolore dolor sit.
              </Typography>
              <Grid container spacing={2} mt={1}>
                <Grid item>
                  <Box display="flex" columnGap={1}>
                    <NumbersIcon fontSize="small" />
                    <Typography variant="caption">PS2826</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box display="flex" columnGap={1}>
                    <HowToRegIcon fontSize="small" />
                    <Typography variant="caption">EU/IS/2019/PHY/76</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box display="flex" columnGap={1}>
                    <SchoolIcon fontSize="small" />
                    <Typography variant="caption">
                      Faculty of Science
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Grid container spacing={2} mt={1}>
            <Grid item xs="12">
              <Typography>General Details</Typography>
            </Grid>
            <Grid item xs="12" sm="6" md="3">
              <HealthDetailCard
                icon={<WcIcon sx={{ color: "white" }} />}
                title="GENDER"
                value="FEMALE"
              />
            </Grid>
            <Grid item xs="12" sm="6" md="3">
              <HealthDetailCard
                icon={<HeightIcon sx={{ color: "white" }} />}
                title="HEIGHT"
                value="5FT 2IN"
              />
            </Grid>
            <Grid item xs="12" sm="6" md="3">
              <HealthDetailCard
                icon={<ScaleIcon sx={{ color: "white" }} />}
                title="WEIGHT"
                value="40KG"
              />
            </Grid>
            <Grid item xs="12" sm="6" md="3">
              <HealthDetailCard
                icon={<BloodtypeIcon sx={{ color: "white" }} />}
                title="BLOOD GROUP"
                value="B+"
              />
            </Grid>
            <Grid item xs="12">
              <Typography>Previous Appointments</Typography>
            </Grid>
            <Grid item xs="12">
              <Box
                sx={{
                  display: "flex",
                  columnGap: 2,
                  overflowX: "auto",
                  scrollbarWidth: "thin",
                  "&::-webkit-scrollbar": {
                    height: "5px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "transparent",
                    transition: "background-color 0.3s ease",
                  },
                  "&:hover::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(128, 128, 128, 0.5)",
                  },
                }}
              >
                <AppointmentCard
                  id="3"
                  time="12:45"
                  image="../../profile4.png"
                  name="Imashi Perera"
                  faculty="Faculty of Science"
                  note="Magna sit ullamco ipsum eu quis labore non sint. Labore culpa tempor."
                  shadow={false}
                  sx={{ minWidth: "300px" }}
                />
                <AppointmentCard
                  id="3"
                  time="12:45"
                  image="../../profile4.png"
                  name="Imashi Perera"
                  faculty="Faculty of Science"
                  note="Magna sit ullamco ipsum eu quis labore non sint. Labore culpa tempor."
                  shadow={false}
                  sx={{ minWidth: "300px" }}
                />
                <AppointmentCard
                  id="3"
                  time="12:45"
                  image="../../profile4.png"
                  name="Imashi Perera"
                  faculty="Faculty of Science"
                  note="Magna sit ullamco ipsum eu quis labore non sint. Labore culpa tempor."
                  shadow={false}
                  sx={{ minWidth: "300px" }}
                />
                <AppointmentCard
                  id="3"
                  time="12:45"
                  image="../../profile4.png"
                  name="Imashi Perera"
                  faculty="Faculty of Science"
                  note="Magna sit ullamco ipsum eu quis labore non sint. Labore culpa tempor."
                  shadow={false}
                  sx={{ minWidth: "300px" }}
                />
                <AppointmentCard
                  id="3"
                  time="12:45"
                  image="../../profile4.png"
                  name="Imashi Perera"
                  faculty="Faculty of Science"
                  note="Magna sit ullamco ipsum eu quis labore non sint. Labore culpa tempor."
                  shadow={false}
                  sx={{ minWidth: "300px" }}
                />
              </Box>
            </Grid>
            <Grid item xs="12">
              <Box display="flex" justifyContent="end" columnGap={2}>
                <Button variant="outlined">Update Details</Button>
                <Button variant="outlined">Add Treatment</Button>
                <Button variant="outlined">Old Treatments</Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
