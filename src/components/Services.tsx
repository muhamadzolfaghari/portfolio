import Section from "./Section";
import { StringType } from "../types/ReferenceType";
import { Grid, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import DevicesIcon from "@mui/icons-material/Devices";
import SchoolIcon from "@mui/icons-material/School";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";

const Item = ({
  title,
  content,
  icon,
}: {
  title: string | React.ReactElement;
  content: string;
  icon: React.ReactElement;
}) => (
  <Stack>
    {icon}
    <Typography variant={"h3"} fontWeight={"bold"} mb={2}>
      {title}
    </Typography>
    <Typography>{content}</Typography>
  </Stack>
);

const Services = ({ R }: { R: StringType }) => (
  <Section title={R.services} subtitle={"کاری که انجام میدهم"}>
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <Item
          title={R.web_development}
          content={R.web_development_description}
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
          title={
            <>
              {R.maps_app_development}
              <Tooltip title={R.gis_definition}>
                <HelpTwoToneIcon
                  sx={{ color: (theme) => theme.palette.primary.main }}
                />
              </Tooltip>
            </>
          }
          content={
            " توسعه پنل‌های تخصصی و تحلیلی بر پایه نقشه، ساخت اپلیکیشن‌های مکان‌محور و مبتنی بر نقشه و ارائه راهکاری جامع برای داده‌های نمایشی و یا آماری برای نمایش در نمودار"
          }
          icon={
            <ShareLocationIcon
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
      </Grid>
      <Grid item sm={6}>
        <Item
          title={R.coaching_and_teaching}
          content={R.coaching_and_teaching_description}
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
