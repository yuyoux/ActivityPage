import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Halo from "../components/Halo";
import CurrencyBar from "../components/CurrencyBar";
import ResultSelector from "../components/ResultSelector";
import ResultSelectorForSmall from "../components/ResultSelectorForSmall";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "../components/List";
import ListForSmall from "../components/ListForSmall";
import { getActivities } from "../actions";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    justifyContent: "center",
    display: "flex"
  }
});

class ActivitiesSheet extends React.Component {
  componentDidMount() {
    this.props.getActivities();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Halo name={"Activity"} />
        <CurrencyBar />
        <div className={classes.root}>
          <Hidden only={["sm", "xs"]}>
            <ResultSelector />
          </Hidden>

          <Hidden only={["lg", "md"]}>
            <Grid
              container
              spacing={0}
              justify="center"
              style={{ width: "85%" }}
            >
              <ResultSelectorForSmall />
            </Grid>
          </Hidden>
        </div>

        <div className={classes.control}>
          {this.props.records.length === 0 ? (
            <CircularProgress />
          ) : (
            // console.log(this.props.records)
            <div className={classes.root}>
              <Hidden only={["sm", "xs"]}>
                <Grid
                  container
                  spacing={0}
                  justify="center"
                  style={{ width: "85%" }}
                >
                  <List records={this.props.records} />
                </Grid>
              </Hidden>

              <Hidden only={["lg", "md"]}>
                <ListForSmall records={this.props.records} />
              </Hidden>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ActivitiesSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    records: state.entities.activity
  };
}

export default connect(
  mapStateToProps,
  {
    getActivities
  }
)(withStyles(styles)(ActivitiesSheet));
