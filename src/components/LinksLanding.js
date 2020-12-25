import React from "react";
import { Grid, Paper, SvgIcon } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    backgroundColor: grey[50]
  },
  cardContainer: {
    justifyContent: "center"
  }
});

export default function LandingLinks() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={4} className={classes.cardContainer}>
        <Grid item sm={12} md={6}>
          <beforeYourFlight />
        </Grid>
        <Grid item sm={12} md={6}>
          {" "}
          <Paper></Paper>{" "}
        </Grid>
        <Grid item sm={12} md={6}>
          {" "}
          <Paper></Paper>{" "}
        </Grid>
        <Grid item sm={12} md={6}>
          {" "}
          <Paper></Paper>{" "}
        </Grid>
      </Grid>
    </>
  );
}
