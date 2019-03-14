import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Hidden from "@material-ui/core/Hidden";
import NativeSelect from "@material-ui/core/Select";

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    display: "flex",
    marginTop: theme.spacing.unit * 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  formControl: {
    margin: 0,
    fullWidth: true,
    display: "flex"
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

// const StyledButton = withStyles({
//   root: {
//     background: "white",
//     borderRadius: 3,
//     border: "2px solid #4527a0",
//     color: "#4527a0",
//     height: 56,
//     padding: "0 30px",
//     alignContent: "right"
//   },
//   label: {
//     textTransform: "capitalize",
//     fullWidth: true
//   }
// })(Button);

class SmallResultSelector extends React.Component {
  state = {
    date_range: "",
    showing: "",
    type: "",
    labelWidth: 0
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Hidden only={["lg", "md"]}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12}>
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
                    Selesct date range
                  </option>
                  <option value={10}>2018 - 2019</option>
                  <option value={20}>2017 - 2018</option>
                  <option value={30}>2016 - 2017</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
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
                  <option value="">show 5 entries</option>
                  <option value={10}>show 10 entries</option>
                  <option value={20}>show 25 entries</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
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
                    Select activity
                  </option>
                  <option value={10}>Stock Trade Commission</option>
                  <option value={20}>Deposit</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid container spacing={0} justify="center" item xs={12} sm={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                style={{ margin: 0 }}
              >
                <span style={{ fontWeight: "bold" }}>Export</span>
              </Button>
            </Grid>
          </Grid>
        </Hidden>
      </div>
    );
  }
}

SmallResultSelector.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SmallResultSelector);
