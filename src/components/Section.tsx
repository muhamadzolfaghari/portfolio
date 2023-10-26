import { Box, Stack, StackProps, Typography } from "@mui/material";

const Section = ({
  title,
  subtitle,
  children,
  ...rest
}: StackProps & { title?: string; subtitle?: string }) => (
  <Stack height={"inherit"} width={"inherit"} pl={10} pr={10} {...rest}>
    {title && subtitle && (
      <Box mb={10}>
        <Typography variant={"h2"} fontWeight={"bold"}>
          {title}
        </Typography>
        <Typography
          gutterBottom
          fontWeight={"bold"}
          color={(theme) => theme.palette.primary.main}
        >
          {subtitle}
        </Typography>
      </Box>
    )}
    {children}
  </Stack>
);

export default Section;
