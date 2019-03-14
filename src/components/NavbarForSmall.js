import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class NavbarForSmall extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", display: "block" }}
              >
                <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
              </Link>
              <Link
                to="/vues"
                style={{ textDecoration: "none", display: "block" }}
              >
                <MenuItem onClick={this.handleClose}>Vues</MenuItem>
              </Link>
              <Link
                to="/stocks"
                style={{ textDecoration: "none", display: "block" }}
              >
                <MenuItem onClick={this.handleClose}>Stocks</MenuItem>
              </Link>
              <Link
                to="/watchlist"
                style={{ textDecoration: "none", display: "block" }}
              >
                <MenuItem onClick={this.handleClose}>Watchlist</MenuItem>
              </Link>
              <Link
                to="/activities"
                style={{ textDecoration: "none", display: "block" }}
              >
                <MenuItem onClick={this.handleClose}>Activity</MenuItem>
              </Link>
            </Menu>
            <Typography
              align="left"
              variant="h6"
              color="textPrimary"
              className={classes.grow}
            >
              Macrovue
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavbarForSmall.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavbarForSmall);
