import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";
import { UseMediaQueryOptions } from "@mui/material";

const defaultTheme = createTheme();

const theme = createTheme(
  {
    direction: "rtl",
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            borderRadius: 20,
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
          },
        },
      },
    },
    palette: {
      primary: {
        light: "#3b4bb7",
        main: "#283379",
        dark: "#151348",
      },
      secondary: {
        main: "#FF7A00",
        light: "#FFA95B",
        dark: "#E85A02",
        contrastText: "#ffffff",
      },
      text: {
        primary: "#444444",
      },
    },
    typography: {
      fontFamily: "Vazir FD WOL UI, Quicksand",
      h1: {
        fontSize: "2.7em",
        fontWeight: defaultTheme.typography.fontWeightBold,
      },
      h2: {
        fontSize: "2em",
        fontWeight: defaultTheme.typography.fontWeightBold,
      },
      h3: {
        fontSize: "1.5em",
        fontWeight: defaultTheme.typography.fontWeightBold,
      },
      h4: {
        fontSize: "1.25em",
        fontWeight: defaultTheme.typography.fontWeightBold,
      },
      h5: {
        fontSize: "1.1em",
        fontWeight: defaultTheme.typography.fontWeightBold,
      },
    },
  },
  faIR
);

type ThemeType = typeof theme;

declare module "@mui/material" {
  function useMediaQuery(
    queryInput: string | ((theme: ThemeType) => string),
    options?: UseMediaQueryOptions
  ): boolean;
}

export default theme;
