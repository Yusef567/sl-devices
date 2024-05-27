"use client";

import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFE312",
    },

    gray: {
      light: "#D3D3D3",
      main: "#808080",
      dark: "#404040",
    },
  },

  typography: {
    fontFamily: roboto.style.fontFamily,
    button: {
      textTransform: "none",
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#000000",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
