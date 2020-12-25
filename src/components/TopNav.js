import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    justifyContent: "space-between"
  },
  navBtn: {
    textTransform: "none",
    borderRadius: 0
  },
  signIn: {
    textTransform: "none",
    paddingLeft: "2.5em",
    paddingRight: "2.5em",
    paddingTop: "0.1em",
    paddingBottom: "0.1em"
  }
});

export default function TopNav() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Grid container>
          <Grid item md={2}></Grid>
          <Grid item sm={12} md={8}>
            <Toolbar className={classes.root}>
              <Typography variant="h5">Ethiopian</Typography>
              <div>
                <Button color="inherit" className={classes.navBtn}>
                  Home
                </Button>
                <Button color="inherit" className={classes.navBtn}>
                  Knowledge
                </Button>
                <Button color="inherit" className={classes.navBtn}>
                  Contact
                </Button>
              </div>

              <Button
                className={classes.signIn}
                variant="contained"
                color="secondary"
                disableElevation
              >
                Sign In
              </Button>
            </Toolbar>
          </Grid>

          <Grid item md={2}></Grid>
        </Grid>
      </AppBar>
    </>
  );
}
