import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";
import { UseMediaQueryOptions } from "@mui/material";

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
        main: "#68e0cf",
        dark: "#151348",
      },
      secondary: {
        main: "#FF7A00",
        light: "#FFA95B",
        dark: "#E85A02",
        contrastText: "#ffffff",
      },
      text: {
        primary: "#ffffff",
      },
    },
    typography: {
      fontFamily: "Vazir FD WOL UI, Quicksand",
    },
  },
  faIR,
);

type ThemeType = typeof theme;

declare module "@mui/material" {
  // noinspection JSUnusedGlobalSymbols
  function useMediaQuery(
    queryInput: string | ((theme: ThemeType) => string),
    options?: UseMediaQueryOptions,
  ): boolean;
}

export default theme;
