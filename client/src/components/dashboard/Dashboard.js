import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import TrelloBoard from "./TrelloBoard";
import Home from "./BoardTab/Notifications";

// styles
import useStyles from "./DashboardStyle";

// components
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Notifications from "./BoardTab/Notifications";

function Dashboard(props) {

  var classes = useStyles();
  console.log("props in layout", props);
  
  return (
    <div className={classes.root}>
      <>
        <Header
          history={props.history}
          isSidebarOpened={props.isSidebarOpened} style={{backgroundColor: '#fafbfc'}}
        />
        <Sidebar isSidebarOpened={props.isSidebarOpened} />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: props.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <div className={classes.outerDiv}>
            <Switch>
              <Route path="/main" component={Home} />
              <Route path="/:boardID" component={TrelloBoard} />
            </Switch>
          </div>
        </div>

      </>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isSidebarOpened: state.layoutReducer.isSidebarOpened
});

export default withRouter(connect(mapStateToProps)(Dashboard));
