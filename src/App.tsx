import React from "react";
import { Grid, Typography } from "@mui/material";
import useString from "./hooks/useString";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

const App = () => {
  const { language } = useSelector((state: RootState) => state.app);
  const str = useString(language);

  return (
    <Grid container height={"inherit"}>
      <Grid
        item
        xs={6}
        bgcolor={(theme) => theme.palette.primary.main}
      >
      </Grid>
      <Grid item xs={6} bgcolor={"#373b40"}>
          <Typography variant={"h1"} bgcolor={'inherit'} ml={-10}>{str.full_name}</Typography>

      </Grid>
    </Grid>
  );
};

export default App;
