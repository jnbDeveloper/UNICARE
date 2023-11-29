import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  CircularProgress,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import "@fontsource/cabin/400.css";
import "@fontsource/cabin/600.css";

export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [openFP, setOpenFP] = useState(false);
  const [canLogin, setCanLogin] = useState(true);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    setCanLogin(false);
    const data = {
      username: username,
      password: password,
    };

    console.log(data);

    setInterval(() => navigate("/home"), 5000);
  };

  const openForgotPassword = () => {
    setOpenFP(true);
  };

  const onCloseForgotPassword = () => {
    setOpenFP(false);
  };

  return (
    <React.Fragment>
      <Dialog open={openFP} onClose={onCloseForgotPassword}>
        <DialogTitle>Forgot Password</DialogTitle>
        <DialogContent>
          <DialogContentText fontSize="14px">
            If you forgot the password please enter your email address below
            then click ok. You will recieve OTP with email.
          </DialogContentText>
          <TextField
            label="Email"
            size="small"
            fullWidth
            variant="standard"
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseForgotPassword}>Cancel</Button>
          <Button onClick={onCloseForgotPassword}>OK</Button>
        </DialogActions>
      </Dialog>

      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Grid item position="absolute">
          <CircularProgress sx={{ display: canLogin ? "none" : "flex" }} />
        </Grid>
        <Grid item>
          <Card sx={{ ml: 2, mr: 2 }}>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src="logo192.png" style={{ width: "50px" }} />
                <Typography
                  variant="h4"
                  fontFamily="Cabin"
                  letterSpacing="9px"
                  fontWeight="600"
                >
                  UNICARE
                </Typography>
                <Typography
                  fontSize="12px"
                  fontFamily="Cabin"
                  letterSpacing="8px"
                  fontWeight="400"
                  color={theme.palette.grey[400]}
                >
                  EUSL SRI LANKA
                </Typography>

                <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                  LOGIN
                </Typography>
              </div>
              <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Email or username"
                size="small"
                fullWidth
                variant="outlined"
              />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                type="password"
                size="small"
                fullWidth
                sx={{ mt: 2 }}
              />
              <Typography
                onClick={openForgotPassword}
                fontSize="12px"
                color={theme.link}
                sx={{ textAlign: "end", mt: 2, cursor: "pointer" }}
              >
                Forgot password?
              </Typography>
              <Button
                disabled={!canLogin}
                onClick={login}
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                {canLogin ? "Sign in" : "Please wait..."}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
