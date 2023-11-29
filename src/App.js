import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { lightTheme, darkTheme } from "./theme/Theme";
import Login from "./pages/Login";
import NavigationDrawer from "./pages/NavigationDrawer";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes path={"/"}>
          <Route path="/" element={<NavigationDrawer />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<NavigationDrawer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
