import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  PagingState,
  IntegratedPaging,
  SortingState,
  IntegratedSorting
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel
} from "@devexpress/dx-react-grid-material-ui";

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: "date", title: "Date" },
        { name: "type", title: "Type" },
        { name: "action", title: "action" },
        { name: "amountaud", title: "Amount AUD" },
        { name: "endingcashaud", title: "Ending Cash AUD" }
      ],
      currentPage: 0,
      pageSize: 5,
      pageSizes: [5, 10, 15],
      tableColumnExtensions: [
        { columnName: "date", align: "left" },
        { columnName: "type", align: "left" },
        { columnName: "action", align: "left" },
        { columnName: "amountaud", align: "right" },
        { columnName: "endingcashaud", align: "right" }
      ],
      sorting: [{ columnName: "date", direction: "asc" }]
    };

    this.changeSorting = sorting => this.setState({ sorting });
    this.changeCurrentPage = currentPage => this.setState({ currentPage });
    this.changePageSize = pageSize => this.setState({ pageSize });
  }

  render() {
    const {
      columns,
      pageSize,
      pageSizes,
      currentPage,
      tableColumnExtensions,
      sorting
    } = this.state;

    return (
      <Paper>
        <Grid rows={this.props.data} columns={columns}>
          <PagingState
            currentPage={currentPage}
            onCurrentPageChange={this.changeCurrentPage}
            pageSize={pageSize}
            onPageSizeChange={this.changePageSize}
          />
          <IntegratedPaging />
          <SortingState
            sorting={sorting}
            onSortingChange={this.changeSorting}
          />
          <IntegratedSorting />
          <Table columnExtensions={tableColumnExtensions} />
          <TableHeaderRow showSortingControls />
          <PagingPanel pageSizes={pageSizes} />
        </Grid>
      </Paper>
    );
  }
}
