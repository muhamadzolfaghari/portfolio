import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const getStringDate = (date: string, language: string) =>
  new Date(date).toLocaleDateString(language, {
    year: "numeric",
    month: "short",
  });


export default function DateRange({
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
