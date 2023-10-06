import Section from "./Section";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { StringType } from "../types/ReferenceType";

const AboutMe = ({ str }: { str: StringType }) => (
  <Section title={str.about_me} subtitle={str.my_story}>
    <Typography>{str.description}</Typography>
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
    <Grid container>
      <Grid item xs>
        <Typography>{str.phone_title}</Typography>
        <Typography>{str.phone}</Typography>
      </Grid>
      <Grid item xs>
        <Typography>{str.phone_title}</Typography>
        <Typography>{str.phone}</Typography>
      </Grid>
    </Grid>
  </Section>
);

export default AboutMe;
