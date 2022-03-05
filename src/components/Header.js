import React, { Component } from "react";
import { withStyles, AppBar } from "@material-ui/core";

import Styles from "../style/Styles";

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.appBar}>
        <h2 className={classes.logo}>
          Todos
        </h2>
      </AppBar>
    );
  }
}


export default withStyles(Styles)(Header);
