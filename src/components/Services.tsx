import Section from "./Section";
import { StringType } from "../types/ReferenceType";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import DevicesIcon from '@mui/icons-material/Devices';
import SchoolIcon from '@mui/icons-material/School';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
const Item = ({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: React.ReactElement;
}) => (
  <Stack>
    {icon}
    <Typography variant={"h3"} fontWeight={"bold"}>
      {title}
    </Typography>
    <Typography>{content}</Typography>
  </Stack>
);
const Services = ({ str }: { str: StringType }) => (
  <Section title={str.services} subtitle={"کاری که انجام میدهم"}>
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <Item
          title={str.web_development}
          content={str.web_development_description}
          icon={
            <DevicesIcon
              sx={{
                fontSize: 60,
                color: (theme) => theme.palette.primary.main,
              }}
            />
          }
        />
      </Grid>
      <Grid item sm={6}>
        <Item
          title={"تحلیل گر سیستم"}
          content={"تست"}
          icon={
            <TroubleshootIcon
              sx={{
                fontSize: 60,
                color: (theme) => theme.palette.primary.main,
              }}
            />
          }
        />
      </Grid>{" "}
      <Grid item sm={6}>
        <Item
          title={"کوچینگ"}
          content={"تست"}
          icon={
            <SchoolIcon
              sx={{
                fontSize: 60,
                color: (theme) => theme.palette.primary.main,
              }}
            />
          }
        />
      </Grid>
        <Grid item sm={6}>
            <Item
                title={"بهینه سازی SEO"}
                content={"تست"}
                icon={
                    <ManageSearchIcon
                        sx={{
                            fontSize: 60,
                            color: (theme) => theme.palette.primary.main,
                        }}
                    />
                }
            />
        </Grid>
    </Grid>
  </Section>
);

export default Services;
