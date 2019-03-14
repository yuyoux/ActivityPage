import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  indicator: {
    backgroundColor: "white"
  },
  select: {
    flexShrink: 0
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            className={classes.indicator}
            textColor="primary"
            variant="fullWidth"
            scrollButtons="auto"
          >
            <Tab
              className={classes.select}
              label="Dashboard"
              component={Link}
              to="/dashboard"
            />
            <Tab
              className={classes.select}
              label="Vues"
              component={Link}
              to="/vues"
            />
            <Tab
              className={classes.select}
              label="Stocks"
              component={Link}
              to="/stocks"
            />
            <Tab
              className={classes.select}
              label="Watchlist"
              component={Link}
              to="/watchlist"
            />
            <Tab
              className={classes.select}
              label="Activity"
              component={Link}
              to="/activities"
            />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
