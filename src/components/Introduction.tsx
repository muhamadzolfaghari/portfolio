import { Button, Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { StringType } from "../types/ReferenceType";
import Section from "./Section";

const Introduction = ({ R }: { R: StringType }) => (
  <Section>
    <Typography
      gutterBottom
      variant={"h2"}
      color={(theme) => theme.palette.primary.main}
    >
      {R.software_engineering}
    </Typography>
    <Typography>{R.introduction}</Typography>
    <Button
      variant={"outlined"}
      sx={{ height: 75, width: 75, borderRadius: "50%" }}
    >
      <ArrowBackIos
        sx={{
          fontWeight: "bold",
          transform: "rotate(270deg)",
          animation: "mouse-anim 1s ease-out 0s infinite",
        }}
      />
    </Button>
  </Section>
);

export default Introduction;
