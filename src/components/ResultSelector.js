import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    display: "flex",
    marginTop: theme.spacing.unit * 2
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

const StyledButton = withStyles({
  root: {
    background: "white",
    borderRadius: 3,
    border: "2px solid #4527a0",
    color: "#4527a0",
    height: 56,
    padding: "0 30px",
    alignContent: "right"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

class ResultSelector extends React.Component {
  state = {
    date_range: "",
    showing: "",
    type: "",
    labelWidth: 10
  };

  //   componentDidMount() {
  //     this.setState({
  //       labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
  //     });
  //   }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Hidden only={["sm", "xs"]}>
          <Grid container spacing={0} justify="center" style={{ width: "85%" }}>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={5}
              container
              direction="row"
              spacing={0}
              alignItems="center"
              justify="flex-start"
            >
              <Grid item sx={1} sm={1} md={3} lg={2}>
                <Typography align="left" variant="subtitle2" gutterBottom>
                  Date range
                </Typography>
              </Grid>

              <Grid
                item
                sx={11}
                sm={11}
                md={9}
                lg={10}
                container
                justify="flex-start"
              >
                <FormControl variant="outlined" className={classes.formControl}>
                  <NativeSelect
                    native
                    value={this.state.date_range}
                    name="date_range"
                    onChange={this.handleChange("date_range")}
                    input={
                      <OutlinedInput
                        name="date_range"
                        labelWidth={this.state.labelWidth}
                        id="outlined-age-native-simple"
                      />
                    }
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    <option value={10}>2018 - 2019</option>
                    <option value={20}>2017 - 2018</option>
                    <option value={30}>2016 - 2017</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>

            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              container
              direction="row"
              spacing={0}
              alignItems="center"
              justify="flex-end"
            >
              <Grid
                item
                xs={1}
                sm={1}
                md={7}
                lg={8}
                container
                justify="flex-end"
              >
                <Typography align="right" variant="subtitle2" gutterBottom>
                  Showing
                </Typography>
              </Grid>
              <Grid
                item
                xs={11}
                sm={11}
                md={5}
                lg={4}
                container
                justify="flex-end"
              >
                <FormControl variant="outlined" className={classes.formControl}>
                  <NativeSelect
                    native
                    value={this.state.showing}
                    name="showing"
                    onChange={this.handleChange("showing")}
                    input={
                      <OutlinedInput
                        name="showing"
                        labelWidth={this.state.labelWidth}
                        id="outlined-age-native-simple"
                      />
                    }
                  >
                    <option value="">5 entries</option>
                    <option value={10}>10 entries</option>
                    <option value={20}>25 entries</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              lg={2}
              container
              direction="row"
              spacing={0}
              alignItems="center"
              justify="flex-end"
            >
              <Grid item xs={1} sm={1} md={2} lg={2}>
                <Typography align="right" variant="subtitle2" gutterBottom>
                  Type
                </Typography>
              </Grid>
              <Grid item xs={11} sm={11} md={10} lg={10}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <NativeSelect
                    native
                    value={this.state.type}
                    name="type"
                    onChange={this.handleChange("type")}
                    input={
                      <OutlinedInput
                        name="type"
                        labelWidth={this.state.labelWidth}
                        id="outlined-age-native-simple"
                      />
                    }
                  >
                    <option value="" disabled>
                      Activity
                    </option>
                    <option value={10}>Stock Trade Commission</option>
                    <option value={20}>Deposit</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={1}
              lg={1}
              container
              justify="flex-end"
              alignItems="center"
            >
              <StyledButton>
                <span style={{ fontWeight: "bold" }}>Export</span>
              </StyledButton>
            </Grid>
          </Grid>
        </Hidden>
      </div>
    );
  }
}

ResultSelector.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultSelector);
