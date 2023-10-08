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
    <Typography variant={"h3"} fontWeight={"bold"} gutterBottom>
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
          title={
            <>
              توسعه دهنده سامانه‌های مبتنی بر نقشه (GIS)
              <Tooltip
                title={"تولید، پردازش، تحلیل و مدیریت اطلاعات جغرافیایی"}
              >
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
          title={"منتورینگ"}
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
