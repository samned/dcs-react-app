import React from "react";
import TopNav from "./components/TopNav";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme";
import SearchLanding from "./components/SearchLanding";
import LinksLanding from "./components/LinksLanding";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid container direction="column" spacing={10}>
          <Grid item>
            <TopNav />
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item sm={2}></Grid>
              <Grid item sm={8} align="center">
                <Grid container direction="column" spacing={4}>
                  <Grid item>
                    <SearchLanding />
                  </Grid>
                  <Grid item>
                    {" "}
                    <LinksLanding />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={2}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
