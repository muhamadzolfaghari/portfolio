import { AppBar, Button, Toolbar } from "@mui/material";
import { languageChanged } from "../features/appSlice.ts";
import { useAppDispatch } from "../app/hooks.ts";
import { useSelector } from "react-redux";

export default function Header() {
  const dispatch = useAppDispatch();
  const { language } = useSelector((state: RooteState) => state.app);

  function handleLanguage() {
    dispatch(languageChanged(language === "fa" ? "en" : "fa"));
  }

  return (
    <AppBar
      sx={{
        backgroundColor: "#585d65",
        top: 40,
        left: 40,
        right: 40,
        p: 1.5,
        borderRadius: 40,
      }}
    >
      <Toolbar>
        <Button
          onClick={handleLanguage}
          color={"primary"}
          variant={"outlined"}
          size={"small"}
          sx={{ height: 50, borderRadius: "50%", maxWidth: 50, p: 0 }}
        >
          {language === "fa" ? "en" : "fa"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
