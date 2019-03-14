import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Clocker from "./Clocker";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 4,
    margin: "auto",
    textAlign: "center",
    backgroundColor: "#9ccc65"
  },
  model: {
    textAlign: "center",
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    color: theme.palette.common.white
  },
  clock: {
    textAlign: "right",
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

function ComplexGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={24}>
          <Grid item lg={4} xs={4} sm={4} md={4}>
            <Typography variant="h4" gutterBottom className={classes.model}>
              {props.name}
            </Typography>
          </Grid>
          <Grid item lg={3} xs={3} sm={3} md={3} />
          <Grid item lg={4} xs={4} sm={4} md={4}>
            <Grid
              item
              container
              className={classes.clock}
              direction="column"
              spacing={16}
              alignItems="center"
              justify="center"
            >
              <Typography
                variant="subtitle2"
                style={{ fontWeight: "bold", fontSize: 16 }}
              >
                Maz Zaman
              </Typography>
              <Clocker />
            </Grid>
          </Grid>
          <Grid item lg={1} xs={1} sm={1} md={1} />
        </Grid>
      </Paper>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ComplexGrid);
