import { useCookies } from "react-cookie";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Switch,
  Select,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [cookies, setCookie] = useCookies(["theme"]);

  useEffect(() => {
    if (cookies["theme"] === "dark") {
      setDarkMode(true);
    }
  }, [cookies]);

  const handleDarkModeChange = (event) => {
    setDarkMode(event.target.checked);
    setCookie("theme", event.target.checked ? "dark" : "light", {
      maxAge: 8640000, // 100 days
    });
  };

  return (
    <Grid container>
      <Grid item xs="12">
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
            <Switch checked={darkMode} onChange={handleDarkModeChange} />
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
              <Typography variant="caption">
                Appointment notification
              </Typography>
              <Switch />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">Emergency notification</Typography>
              <Switch />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">Maxmum patient warning</Typography>
              <Box display="flex" columnGap={1} alignItems="center">
                <Typography variant="caption">More than</Typography>
                <TextField
                  placeholder="patients"
                  type="number"
                  size="small"
                  variant="outlined"
                />
                <Typography variant="caption">patients in a</Typography>
                <Select size="small">
                  <MenuItem value={0}>day</MenuItem>
                  <MenuItem value={1}>week</MenuItem>
                  <MenuItem value={2}>month</MenuItem>
                </Select>
                <Switch />
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
