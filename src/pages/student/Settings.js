import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Grid,
  Typography,
  Switch,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useTheme } from "../../theme/ThemeContext";
import { useEffect, useState } from "react";
import { fetch, put } from "../../network/Request";
import { useStudent } from "./StudentContext";

export default function Settings() {
  const { noAuth, showAlert } = useStudent();
  const { darkMode, toggleDarkMode } = useTheme();

  const [emergencyNotifications, setEmergencyNotifications] = useState(false);

  const emergencyNotificationsChanged = () => {
    put(
      "tabs/students/settings/toggle/emergency-notifications",
      {},
      (response) => {
        showAlert(response.status, response.message);
        setEmergencyNotifications(response.emergencyNotifications);
      },
      (error) => {
        if (error.status === "no-auth") noAuth();
        else showAlert(error.status, error.message);
      }
    );
  };

  useEffect(() => {
    fetch(
      "tabs/students/settings",
      {},
      (response) => {
        setEmergencyNotifications(response.emergencyNotifications);
      },
      (error) => {
        if (error.status === "no-auth") noAuth();
        else showAlert(error.status, error.message);
      }
    );
  }, [noAuth, showAlert]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Theme</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="caption">Dark theme</Typography>
            <Switch checked={darkMode} onChange={toggleDarkMode} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Notifications</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">Emergency notifications</Typography>
              <Switch
                checked={emergencyNotifications}
                onChange={emergencyNotificationsChanged}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
