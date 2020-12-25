import React from "react";
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";
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

export default function KnowledgeLinksCard() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={4} className={classes.cardContainer}>
        <Grid item>
          {" "}
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  color="secondary"
                >
                  ONLINE BOOKING
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica. Lizards are a widespread group of squamate
                  reptiles, with over 6,000 species, ranging across all
                  continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
