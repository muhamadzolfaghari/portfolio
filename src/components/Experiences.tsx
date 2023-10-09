import Section from "./Section";
import { StringType } from "../types/ReferenceType";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {List, ListItem} from "@mui/material";

const Item = ({ duration, title }: { duration: string; title: string }) => (
  <Stack position="relative">
    <Box position={"relative"}>
      <Typography
        sx={{
          position: "absolute",
          transform: "rotate(90deg)",
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {duration}
      </Typography>
    </Box>
    <Typography variant={"h3"} fontWeight={"bold"}>
      {title}
    </Typography>
    <List>{<ListItem></ListItem>}</List>
  </Stack>
);

export default function Experiences({ str }: { str: StringType }) {
  return (
    <Section title={str.experiences} subtitle={str.working_with}>
      <Item duration={"2016-2021"} title={str.frontend_developer_lead} />
    </Section>
  );
}
