import Section from "./Section";
import { StringType } from "../types/ReferenceType";
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
import { LanguageType } from "../types/LanguageType";
import { CircleOutlined } from "@mui/icons-material";
import parsimapLogo from "../assets/images/parsimap-logo.png";
import freelanceLogo from "../assets/images/freelance.png";
import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";

interface IDatum {
  img: string;
  title: string;
  endDate: string;
  startDate: string;
  description: string;
}

const getDateString = (language: string, date: string) =>
  new Date(date).toLocaleDateString(language, {
    year: "numeric",
    month: "short",
  });

const getData = (language: LanguageType, R: StringType): IDatum[] => [
  {
    img: parsimapLogo,
    title: R.frontend_developer_lead,
    startDate: getDateString(language, "2022-09"),
    endDate: R.until_now,
    description: R.frontend_developer_lead_description,
  },
  {
    img: parsimapLogo,
    title: R.senior_frontend_developer,
    startDate: getDateString(language, "2020-07"),
    endDate: getDateString(language, "2022-09"),
    description: R.senior_frontend_developer_description,
  },
  {
    img: parsimapLogo,
    title: R.mid_level_frontend_developer,
    startDate: getDateString(language, "2016-11"),
    endDate: getDateString(language, "2020-07"),
    description: R.mid_level_frontend_developer_description,
  },
  {
    img: freelanceLogo,
    title: R.joiner_full_stack_developer,
    startDate: getDateString(language, "2013-5"),
    endDate: getDateString(language, "2016-10"),
    description: R.joiner_full_stack_developer_description,
  },
  {
    img: freelanceLogo,
    title: R.joiner_full_stack_developer,
    startDate: getDateString(language, "2015-1"),
    endDate: getDateString(language, "2015-5"),
    description: R.joiner_full_stack_developer_fam_description,
  },
];

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
        {language === "fa" ? endDate : startDate}
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
        {language === "fa" ? startDate : endDate}
      </Typography>
    </Stack>
  );
}

const Item = ({ title, startDate, endDate, description, img }: IDatum) => (
  <Stack position="relative" mb={8}>
    <Stack
      direction={"row"}
      mb={2}
      position={"relative"}
      overflow={"hidden"}
      alignItems={"center"}
    >
      <DateRange startDate={startDate} endDate={endDate} />
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        <Typography variant={"h3"} fontWeight={"bold"} maxWidth={240}>
          {title}
        </Typography>
        <Stack
          bgcolor={(theme) => alpha(theme.palette.primary.main, 0.25)}
          borderRadius={20}
          height={50}
          width={50}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box component={"img"} src={img} width={30} />
        </Stack>
      </Stack>
    </Stack>
    <List disablePadding>
      {description.split("\n").map((desc, index) => (
        <ListItem key={index} disableGutters sx={{ pb: 0.25, pt: 0.25 }}>
          <ListItemAvatar
            sx={{
              minWidth: "unset",
              pr: 1,
              display: "flex",
              alignItems: "center",
              color: (theme) => theme.palette.primary.main,
            }}
          >
            <CircleOutlined sx={{ fontSize: 15 }} />
          </ListItemAvatar>
          <ListItemText
            sx={{
              [`.${typographyClasses.body1}`]: {
                fontSize: 14,
              },
            }}
          >
            {desc}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  </Stack>
);

export default function Experiences({
  R,
  language,
}: {
  R: StringType;
  language: LanguageType;
}) {
  return (
    <Section title={R.experiences} subtitle={R.working_with}>
      {getData(language, R).map((datum, index) => (
        <Item {...datum} key={index} />
      ))}
    </Section>
  );
}
