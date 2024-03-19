import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";

import "@fontsource/cabin/400.css";
import "@fontsource/cabin/600.css";
import { useStudent } from "./StudentContext";

import Doctor from "../../assets/images/Doctor.svg";

import { fetch } from "../../network/Request";

export default function Home() {
  const { noAuth, showAlert, student } = useStudent();

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [now, setNow] = useState(dayjs().format("HH:mm:ss A"));
  const [doctorOnline, setDoctorOnline] = useState(false);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(dayjs().format("HH:mm:ss A"));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    fetch(
      "tabs/students/home",
      {},
      (response) => {
        if (response.doctor) {
          setDoctorOnline(response.doctor.online);
        }
      },
      (error) => {
        if (error.status === "no-auth") noAuth();
        else showAlert(error.status, error.message);
      }
    );
  }, [noAuth, showAlert]);

  useEffect(() => {
    const channel = new BroadcastChannel("fcm-channel");

    const handleMessage = (event) => {
      console.log("Received message from service worker:", event.data);
      const data = event.data.data;

      if (data.task === "online") {
        setDoctorOnline(data.online === "true");
      }
    };

    channel.addEventListener("message", handleMessage);

    return () => {
      channel.removeEventListener("message", handleMessage);
      channel.close();
    };
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              Hi {student.firstName}, Good Afternoon
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography>{now}</Typography>
              <Typography>{dayjs().format("DD/MM/YYYY")}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography color={doctorOnline ? "green" : "red"}>
              {doctorOnline ? "Doctor is available" : "Doctor is not available"}
            </Typography>
            {doctorOnline && (
              <img src={Doctor} alt="Doctor" style={{ height: "100px" }} />
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12}>
        <Card>
          <CardContent
            sx={{
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar value={selectedDate} onChange={handleDateChange} />
            </LocalizationProvider>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
