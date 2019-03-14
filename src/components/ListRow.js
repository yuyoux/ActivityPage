import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 18
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "95%",
    marginTop: theme.spacing.unit * 1,
    overflowX: "auto",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  }
});

class ListRow extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Paper className={classes.root}>
          <Table className={classes.table} padding="dense">
            <TableHead>
              <TableRow>
                <CustomTableCell className={classes.tableCell} align="center">
                  Date
                </CustomTableCell>
                <CustomTableCell className={classes.tableCell} align="center">
                  Type
                </CustomTableCell>
                <CustomTableCell className={classes.tableCell} align="center">
                  Action
                </CustomTableCell>
                <CustomTableCell className={classes.tableCell} align="center">
                  Amount AUD
                </CustomTableCell>
                <CustomTableCell className={classes.tableCell} align="center">
                  Ending Cash AUD
                </CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.data.map(row => (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell
                    className={classes.tableCell}
                    component="th"
                    scope="row"
                    align="center"
                  >
                    {row.date}
                  </CustomTableCell>
                  <CustomTableCell className={classes.tableCell} align="center">
                    {row.type}
                  </CustomTableCell>
                  <CustomTableCell className={classes.tableCell} align="center">
                    {row.action}
                  </CustomTableCell>
                  <CustomTableCell className={classes.tableCell} align="center">
                    {row.amountaud}
                  </CustomTableCell>
                  <CustomTableCell className={classes.tableCell} align="center">
                    {row.endingcashaud}
                  </CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    );
  }
}

ListRow.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ListRow);
