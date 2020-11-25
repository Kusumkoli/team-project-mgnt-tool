import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";
import { withStyles } from '@material-ui/core/styles';

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
          {/* <button style={{margin:'40px 40px'}}onClick={test} >  Test </button> */}
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/dashboard" component={Notifications} />
            {/*<Route path="/app/dashboard" component={Home} />
             <Route path="/app/dashboard" component={Company} />
            <Route path="/app/vc-home" component={Home} /> 
            <Route path="/app/tasks" component={Task} />
            <Route path="/app/entities" component={EntityListCompany} />
    
            <Route path="/app/monitoring" component={Monitoring} />
            <Route path="/app/notifications" component={Task} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} /> */}
          </Switch>
        </div>
      </>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("in layout  mapstatetoprops", state);
  // return {
  //   isSidebarOpened: state.LayoutReducer.isSidebarOpened,
  // };
};

export default withRouter(connect(mapStateToProps)(Dashboard));








//old code from Login 

// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
// class Dashboard extends Component {
//   onLogoutClick = e => {
//     e.preventDefault();
//     this.props.logoutUser();
//   };
// render() {
//     const { user } = this.props.auth;
// return (
//       <div style={{ height: "75vh" }} className="container valign-wrapper">
//         <div className="row">
//           <div className="col s12 center-align">
//             <h4>
//               <b>Hey there,</b> {user.name.split(" ")[0]}
//               <p className="flow-text grey-text text-darken-1">
//                 You are logged into a full-stack{" "}
//                 <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
//               </p>
//             </h4>
//             <button
//               style={{
//                 width: "150px",
//                 borderRadius: "3px",
//                 letterSpacing: "1.5px",
//                 marginTop: "1rem"
//               }}
//               onClick={this.onLogoutClick}
//               className="btn btn-large waves-effect waves-light hoverable blue accent-3"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// Dashboard.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//   auth: state.auth
// });
// export default connect(
//   mapStateToProps,
//   { logoutUser }
// )(Dashboard);