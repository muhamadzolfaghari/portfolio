import { Stack, StackProps } from "@mui/material";

const Section = (props: StackProps) => (
  <Stack height={"inherit"} width={"inherit"} pl={10} pr={10} {...props} />
);

export default Section;
