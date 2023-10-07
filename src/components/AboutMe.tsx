import Section from "./Section";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { StringType } from "../types/ReferenceType";

const Row = ({ title, value }: { title: string; value: string }) => (
  <Stack direction={"row"}>
    <Typography
      fontWeight={"bold"}
      color={(theme) => theme.palette.primary.main}
    >
      {title}
    </Typography>
    <Typography>{value}</Typography>
  </Stack>
);

const AboutMe = ({ str }: { str: StringType }) => (
  <Section title={str.about_me} subtitle={str.my_story}>
    <Typography mb={4}>{str.description}</Typography>
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <Row title={str.address_title} value={str.address} />
      </Grid>
      <Grid item sm={6}>
        <Row title={str.email} value={"muhamad.zolfaghari@gmail.com"} />
      </Grid>
      <Grid item sm={6}>
        <Row title={str.phone_title} value={str.phone} />
      </Grid>
    </Grid>
  </Section>
);

export default AboutMe;
