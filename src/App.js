import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

import getUnicareTheme from "./theme/Theme";
import Login from "./pages/Login";
import NavigationDrawer from "./pages/medical-centre/NavigationDrawer";

export default function App() {
  const [cookies] = useCookies(["theme"]);
  const [theme, setTheme] = useState(
    cookies["theme"] === undefined ? "light" : cookies["theme"]
  );

  useEffect(() => {
    setTheme(cookies["theme"]);
  }, [cookies]);

  const unicareTheme = getUnicareTheme({ mode: theme });

  return (
    <ThemeProvider theme={unicareTheme}>
      <BrowserRouter>
        <Routes path={"/"}>
          <Route path="/login" element={<Login />} />
          <Route path="/medical-centre/home" element={<NavigationDrawer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
