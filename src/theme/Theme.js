import { createTheme, colors } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0f7029",
      light: "#128731",
      dark: "#0a4d1c",
    },
    secondary: {
      main: "#6fd546",
      light: "#81f752",
      dark: "#58a838",
    },
  },
  containers: {
    background: "#ffffff",
    onBackground: "#fafafa",
    surface: "#f5f5f5",
    onSurface: "#f0f0f0",
  },
  textfield: {
    background: "#f5f5f5",
    color: "#666666",
  },
  button: {
    background: "#2d3136",
    color: "#f5f5f5",
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          color: (theme) => theme.palette.text.secondary,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          color: (theme) => theme.palette.text.secondary,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgba(130, 130, 130, 0.5)",
          fontSize: "14px",
        },
      },
    },
  },
  link: "#198aff",
  selectedMenu: "rgba(15, 112, 41, 0.1)",
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#222222",
      light: "#aaaaaa",
      dark: "#aaaaaa",
    },
    secondary: {
      main: colors.amber["300"],
    },
    text: {
      primary: "#333333",
      secondary: "#777777",
    },
  },
  textfield: {
    background: "#373c42",
    color: "#999999",
  },
  button: {
    background: "#2d3136",
    color: "#999999",
  },
  link: "#add8e6",
});
