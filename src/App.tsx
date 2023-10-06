import React from "react";
import {
  AppBar,
  Box,
  Divider,
  Fab,
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

const App = () => {
  const dispatch = useAppDispatch();
  const { language } = useSelector((state: RootState) => state.app);
  const str = useString(language);

  function handleLanguage() {
    dispatch(languageChanged(language === "fa" ? "en" : "fa"));
  }

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#373b40",
          top: 40,
          left: 40,
          right: 40,
          borderRadius: 40,
        }}
      >
        <Toolbar>
          <Box>
            <Fab onClick={handleLanguage}>{language}</Fab>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container height={"inherit"}>
        <Grid item xs={6} bgcolor={"#373b40"} pt={14} zIndex={2}>
          <Stack
            textAlign={"right"}
            bgcolor={"inherit"}
            borderRadius={50}
            mr={-20}
            p={9}
            fontWeight={"bold"}
            width={"fit-content"}
            ml={"auto"}
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
          <Stack height={"inherit"} width={"inherit"} p={10} pt={0}>
            <Typography variant={"h2"} fontWeight={"bold"}>
              {str.about_me}
            </Typography>
            <Typography
              mb={10}
              fontWeight={"bold"}
              color={(theme) => theme.palette.primary.main}
            >
              {str.my_story}
            </Typography>
            <Grid container>
              <Grid item xs>
                <Stack direction={"row"}>
                  <Typography
                    fontWeight={"bold"}
                    color={(theme) => theme.palette.primary.main}
                  >
                    {str.address_text}
                  </Typography>
                  <Typography>{str.address}</Typography>
                </Stack>
              </Grid>
              <Grid item xs flexDirection={"row"}>
                <Typography>{str.email}</Typography>
                <Typography>muhamad.zolfaghari@gmail.com</Typography>
              </Grid>
            </Grid>
            <Typography>{str.phone_title}</Typography>
            <Typography>{str.phone}</Typography>
            <Divider color={"#797979"} />
            <Typography>{str.services}</Typography>
            <Typography>{str.web_development}</Typography>
            <Typography>{str.web_development_description}</Typography>
            <Typography variant={"h3"} fontWeight={"bold"}>
              {str.experiences}
            </Typography>
            <Typography variant={"h3"} fontWeight={"bold"}>
              {str.educations}
            </Typography>
          </Stack>
        </Grid>
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
                backgroundSize: "contain",
                mixBlendMode: "luminosity",
                backgroundImage: `url(${userImage})`,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
