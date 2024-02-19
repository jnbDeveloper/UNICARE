import { Card, CardContent, CardHeader, Grid, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import ReactApexCharts from "react-apexcharts";

import { fetch } from "../../network/Request";
import { useDoctor } from "./DoctorContext";
import daysjs from "dayjs";

export default function Analysis() {
  const theme = useTheme();
  const { showAlert, noAuth } = useDoctor();

  const [chart1Series, setChart1Series] = useState([]);
  const [chart1Labels, setChart1Labels] = useState([]);
  const [chart2Series, setChart2Series] = useState([]);
  const [chart2Labels, setChart2Labels] = useState([]);
  const [chart3Series, setChart3Series] = useState([]);
  const [chart3Labels, setChart3Labels] = useState([]);

  const chart1Options = {
    chart: {
      width: 100,
      type: "donut",
      background: "transparent",
      border: "none",
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
      style: {
        fontSize: "8px",
        textShadow: "none",
      },
    },
    legend: {
      markers: {
        width: 12,
        height: 12,
        radius: 6,
        offsetX: 0,
        offsetY: 0,
        strokeWidth: 0,
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
    responsive: [
      {
        breakpoint: 800,
        options: {
          chart: {},
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    labels: chart1Labels,
  };

  const chart2Options = {
    chart: {
      height: 300,
      type: "area",
      background: "rgba(0, 0, 0, 0)",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    xaxis: {
      type: "year",
      categories: chart2Labels,
    },
    tooltip: {
      x: {
        format: "yyyy",
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      markers: {
        width: 12,
        height: 12,
        radius: 6,
        offsetX: 0,
        offsetY: 1,
        strokeWidth: 0,
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
  };

  const chart3Options = {
    chart: {
      type: "bar",
      height: 300,
      stacked: true,
      background: "rgba(0, 0, 0, 0)",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: chart3Labels,
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      markers: {
        width: 12,
        height: 12,
        radius: 6,
        offsetX: 0,
        offsetY: 1,
        strokeWidth: 0,
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
  };

  useEffect(() => {
    fetch(
      "tabs/doctors/analysis",
      {},
      (response) => {
        // chart 1
        setChart1Labels(response.chart1.map((item) => item.disease));
        setChart1Series(response.chart1.map((item) => item.count));

        // chart 2
        let series = [];
        let labels = [];
        response.chart2.forEach((e) => {
          series.push({
            name: e.faculty,
            data: e.years.map((f) => f.count),
          });
          labels = e.years.map((f) => f.year);
        });
        setChart2Series(series);
        setChart2Labels(labels);

        // chart 3
        setChart3Labels(response.chart3.map((e) => e.faculty));
        setChart3Series((prev) => [
          ...prev,
          {
            name: "Male",
            group: "a",
            data: response.chart3.map((e) => e.male),
          },
        ]);
        setChart3Series((prev) => [
          ...prev,
          {
            name: "Female",
            group: "a",
            data: response.chart3.map((e) => e.female),
          },
        ]);
      },
      (error) => {
        if (error.status === "no-auth") noAuth();
        else showAlert(error.status, error.message);
      }
    );
  }, [noAuth, showAlert]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
        <Card sx={{ height: "100%" }}>
          <CardHeader
            title="Diseases vs students"
            subheader={`In ${daysjs().format("YYYY")}`}
          />
          <CardContent>
            <ReactApexCharts
              height={300}
              options={chart1Options}
              series={chart1Series}
              type="donut"
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Card sx={{ height: "100%" }}>
          <CardHeader
            title="Faculty wise students"
            subheader="In last 5 years"
          />
          <CardContent>
            <ReactApexCharts
              options={chart2Options}
              series={chart2Series}
              type="area"
              height={300}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Card sx={{ height: "100%" }}>
          <CardHeader
            title="Diseases vs gender"
            subheader={`In ${daysjs().format("YYYY")}`}
          />
          <CardContent>
            <ReactApexCharts
              height={300}
              options={chart3Options}
              series={chart3Series}
              type="bar"
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
