import React from "react";
import {Grid, Typography} from "@mui/material";

const App = () => (
  <Grid container height={"inherit"} bgcolor={"#373b40"}>
    <Grid
      item
      xs={6}
      height={"inherit"}
      bgcolor={(theme) => theme.palette.primary.main}
    >
        <Typography variant={'h1'}>

        </Typography>
    </Grid>
    <Grid item xs={6}>
      test
    </Grid>
  </Grid>
);

export default App;
