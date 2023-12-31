import { useEffect } from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import useStringReference from "../hooks/useStringReference.ts";
import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";
import userImage from "../assets/images/new.png";
import Introduction from "../components/Introduction.tsx";
import AboutMe from "../components/AboutMe.tsx";
import Services from "../components/Services.tsx";
import WorkExperiences from "../components/WorkExperiences.tsx";
import Header from "../components/Header.tsx";
import Educations from "../components/Educations.tsx";

function Home() {
  const { language } = useSelector((state: RootState) => state.app);
  const R = useStringReference(language);

  useEffect(() => {
    document.body.dir = language === "en" ? "ltr" : "rtl";
  }, [language]);

  return (
    <>
      <Header />
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
              {R.name}
            </Typography>
            <Typography variant={"h1"} fontWeight={"bold"}>
              {R.family}
            </Typography>
          </Stack>
          <Introduction R={R} />
          <Divider color={"#797979"} sx={{ mt: 10, mb: 10 }} />
          <AboutMe R={R} />
          <Divider color={"#797979"} sx={{ mt: 10, mb: 10 }} />
          <Services R={R} />
          <Divider color={"#797979"} sx={{ mt: 10, mb: 10 }} />
          <WorkExperiences />
          <Educations />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
