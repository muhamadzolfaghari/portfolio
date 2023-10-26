import Section from "./Section";
import Typography, { typographyClasses } from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {
  alpha,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { CircleOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";
import useStringReference from "../hooks/useStringReference.ts";
import EXPERIENCES from "../lib/experiences.ts";
import IDatum from "../interfaces/IDatum.ts";

const getStringDate = (date: string, language: string) =>
  new Date(date).toLocaleDateString(language, {
    year: "numeric",
    month: "short",
  });

function DateRange({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  const { language } = useSelector((state: RootState) => state.app);

  return (
    <Stack
      position={"absolute"}
      dir={"ltr"}
      direction={"row"}
      sx={{
        transform: "rotate(270deg)",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        mr: -4,
        ml: -4,
        " p": {
          fontSize: 12,
        },
      }}
    >
      <Typography
        sx={{
          lineHeight: 1,
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {language === "fa" ? endDate : getStringDate(startDate, language)}
      </Typography>
      <Typography
        pr={0.5}
        pl={0.5}
        sx={{
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {language === "fa" ? " تا " : " - "}
      </Typography>
      <Typography
        sx={{
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {language === "fa" ? startDate : getStringDate(endDate, language)}
      </Typography>
    </Stack>
  );
}


export default function Experiences() {
  const R = useStringReference();

  return (
    <Section title={R.experiences} subtitle={R.working_with}>
      {EXPERIENCES.map((datum, index) => (
        <Item {...datum} key={index} />
      ))}
    </Section>
  );
}
