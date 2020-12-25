import React from "react";
import { Typography, TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import KnowledgeLinksCard from "./KnowledgeLinksCard";

const useStyles = makeStyles({
  searchIcon: {},
  searchGroup: {
    width: "75%",
    paddingRight: 0
  }
});

export default function Search() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column" spacing={6}>
        <Grid item>
          <Typography variant="h4">
            Hello, Samuel how can we help today?
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            className={classes.searchGroup}
            autoFocus
            variant="outlined"
            color="secondary"
            label="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item>
          <Grid container spacing={4}>
            <Grid item sm={12} md={6}>
              <KnowledgeLinksCard />
            </Grid>
            <Grid item sm={12} md={6}>
              <KnowledgeLinksCard />
            </Grid>
            <Grid item sm={12} md={6}>
              <KnowledgeLinksCard />
            </Grid>
            <Grid item sm={12} md={6}>
              <KnowledgeLinksCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
