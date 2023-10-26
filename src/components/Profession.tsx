import useStringReference from "../hooks/useStringReference.ts";
import Section from "./Section.tsx";
import IDatum from "../interfaces/IDatum.ts";
import Stack from "@mui/material/Stack";
import Typography, { typographyClasses } from "@mui/material/Typography";
import {
  alpha,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { CircleOutlined } from "@mui/icons-material";
import DateRange from "./DateRange.tsx";

interface IProps {
  title: string;
  subtitle: string;
  data: IDatum[];
}

function Item({ title, startDate, endDate, description, img }: IDatum) {
  const R = useStringReference();

  return (
    <Stack position="relative" mb={8}>
      <Stack
        direction={"row"}
        mb={2}
        position={"relative"}
        overflow={"hidden"}
        alignItems={"center"}
      >
        <DateRange startDate={startDate} endDate={endDate} />
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant={"h3"} fontWeight={"bold"} maxWidth={240}>
            {R[title]}
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
        {R[description].split("\n").map((desc, index) => (
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
}

export default function Profession({ title, subtitle, data }: IProps) {
  return (
    <Section title={title} subtitle={subtitle}>
      {data.map((datum, index) => (
        <Item {...datum} key={index} />
      ))}
    </Section>
  );
}
