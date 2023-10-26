import { AppBar, Button, Toolbar } from "@mui/material";
import { languageChanged } from "../features/appSlice.ts";

export default function Header() {
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