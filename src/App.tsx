import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import useString from "./hooks/useString";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { useAppDispatch } from "./app/hooks";
import { languageChanged } from "./features/appSlice";
import userImage from "./assets/images/new.png";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experiences from "./components/Experiences";

const App = () => {
  const dispatch = useAppDispatch();
  const { language } = useSelector((state: RootState) => state.app);
  const str = useString(language);

  useEffect(() => {
    document.body.dir = language === "en" ? "ltr" : "rtl";
  }, [language]);

  function handleLanguage() {
    dispatch(languageChanged(language === "fa" ? "en" : "fa"));
  }

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#585d65",
          top: 40,
          left: 40,
          right: 40,
          p: 1.5,
          borderRadius: 40,
        }}
      >
        <Toolbar>
          <Button
            onClick={handleLanguage}
            color={"primary"}
            variant={"outlined"}
            size={"small"}
            sx={{ height: 50, borderRadius: "50%", maxWidth: 50, p: 0 }}
          >
            {language === "fa" ? "en" : "fa"}
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container height={"inherit"}>
        <Grid
          item
          xs={6}
          height={"inherit"}
          width={"inherit"}
          sx={{ position: "relative" }}
        >
          <Box
            width={"inherit"}
            height={"inherit"}
            position={"fixed"}
            bgcolor={(theme) => theme.palette.primary.main}
          >
            <Box
              sx={{
                zIndex: 1,
                width: "50%",
                height: "inherit",
                position: "fixed",
                filter: "grayscale(100%)",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "10%",
                backgroundSize: "cover",
                mixBlendMode: "luminosity",
                backgroundImage: `url(${userImage})`,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} bgcolor={"#373b40"} pt={14} zIndex={2}>
          <Stack
            textAlign={language === "en" ? "right" : "left"}
            bgcolor={"inherit"}
            borderRadius={50}
            ml={language === "en" ? "auto" : -20}
            mr={language === "en" ? -20 : "auto"}
            p={9}
            fontWeight={"bold"}
            width={"fit-content"}
          >
            <Typography variant={"h1"} fontWeight={"bold"}>
              {str.name}
            </Typography>
            <Typography variant={"h1"} fontWeight={"bold"}>
              {str.family}
            </Typography>
          </Stack>
          <Introduction str={str} />
          <Divider color={"#797979"} sx={{ mt: 10, mb: 10 }} />
          <AboutMe str={str} />
          <Divider color={"#797979"} sx={{ mt: 10, mb: 10 }} />
          <Services str={str} />
          <Divider color={"#797979"} sx={{ mt: 10, mb: 10 }} />
          <Experiences str={str} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
