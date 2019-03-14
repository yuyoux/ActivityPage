import React from "react";
import Typography from "@material-ui/core/Typography";

var moment = require("moment");
moment().format();

const styles = { color: "white", fontSize: 16 };

function Clocker() {
  return (
    <Typography variant="subtitle2" style={styles}>
      {moment().format("dddd, ll")}
    </Typography>
  );
}

export default Clocker;
