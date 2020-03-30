import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function News() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://cdn.pixabay.com/photo/2020/03/21/00/48/world-4952390_1280.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  COVID-19 Update
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Coronavirus outbreak live updates:
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  India has taken unprecedented and early steps to deal with
                  coronavirus pandemic, says PM
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="#outlined-buttons"
                  >
                    Read more
                  </Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Date/Time?</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
