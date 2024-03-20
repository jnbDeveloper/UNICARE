import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import RecordCard from "../../components/RecordCard";
import { fetch } from "../../network/Request";
import { useStudent } from "./StudentContext";

export default function HealthRecords() {
  const { showAlert, noAuth } = useStudent();

  const [healthRecords, setHealthRecords] = useState([]);
  const [doctor, setDoctor] = useState({ image: "" });

  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  useState(() => {
    fetch(
      "tabs/students/health-records",
      {},
      (response) => {
        setHealthRecords(response.records);
        setDoctor(response.doctor);
      },
      (error) => {
        if (error.status === "no-auth") noAuth();
        else showAlert(error.status, error.message);
      }
    );
  }, [noAuth, showAlert]);

  return (
    <Box
      overflowY="auto"
      display="inline-grid"
      gap="16px 16px"
      gridTemplateColumns={downSm ? "1fr" : downMd ? "1fr 1fr" : "1fr 1fr 1fr"}
    >
      {healthRecords.map((record, index) => (
        <RecordCard key={index} dp={doctor.image} data={record} />
      ))}
    </Box>
  );
}
