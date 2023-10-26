import Section from "./Section";
import { Grid, Stack, Typography } from "@mui/material";
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

const AboutMe = ({ R }: { R: StringType }) => (
  <Section title={R.about_me} subtitle={R.my_story}>
    <Typography mb={4}>{R.description}</Typography>
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <Row title={R.address_title} value={R.address} />
      </Grid>
      <Grid item sm={6}>
        <Row title={R.email} value={"muhamad.zolfaghari@gmail.com"} />
      </Grid>
      <Grid item sm={6}>
        <Row title={R.phone_title} value={R.phone} />
      </Grid>
    </Grid>
  </Section>
);

export default AboutMe;
