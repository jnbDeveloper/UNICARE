import { createTheme } from "@mui/material";

export default function getUnicareTheme({ mode }) {
  const unicareTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        lighter: "#C8FAD6",
        light: "#5BE49B",
        main: "#11844F",
        dark: "#007867",
        darker: "#004B50",
      },
      secondary: {
        main: "#6fd546",
        light: "#81f752",
        dark: "#58a838",
      },
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
      MuiCardContent: {
        styleOverrides: {
          root: {
            paddingBottom: "16px !important",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: "5px 5px 20px 5px rgba(0, 0, 0, 0.08)",
          },
        },
      },
      MuiDialogContentText: {
        styleOverrides: {
          root: {
            fontSize: "14px",
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          title: {
            fontSize: "18px",
          },
          subheader: {
            fontSize: "12px",
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            color: (theme) => theme.palette.text.secondary,
          },
        },
      },
    },
    link: "#198AFF",
    selectedMenu: "rgba(15, 112, 41, 0.1)",
  });

  return unicareTheme;
}
