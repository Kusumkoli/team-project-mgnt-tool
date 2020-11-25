import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import InfoIcon from '@material-ui/icons/Info';
import StorageIcon from '@material-ui/icons/Storage';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TimelineIcon from '@material-ui/icons/Timeline';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ComputerIcon from '@material-ui/icons/Computer';
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import { connect } from 'react-redux';

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./SidebarLink/SidebarLink";
// import Dot from "./components/Dot";


import {toggleSidebar} from '../../../reducers/layoutReducers'
import { layoutDispatch } from '../../../actions/LayoutActions'

const structure = [
  { id: 0, label: "Dashboard", link: "/dashboard", icon: <HomeIcon /> },
  { id: 1, label: "Company Vitals", link: "/app/tables", icon: <PermDataSettingIcon /> },
  { id: 2, label: "Data Room", link: "/app/typography", icon: <StorageIcon /> },
  { id: 3, label: "Corporate Actions", link: "/app/corporate-action", icon: < AssignmentIcon /> },
  { id: 4, label: "Timeline", link: "/app/timeline", icon: <TimelineIcon /> },
  { id: 5, label: "E-Sign", link: "/app/board-room", icon: <MeetingRoomIcon /> }
];

// function Sidebar(  {location ,isSidebarOpened } ) {
//   var classes = useStyles();
//   var theme = useTheme();

//   console.log("sidebar location",location)  
// console.log("sidebar props",isSidebarOpened)
//   // global
//   //var { isSidebarOpened } = props;
//   //var layoutDispatch = useLayoutDispatch();

//   // local
//   var [isPermanent, setPermanent] = useState(true);

//   useEffect(function() {
//     window.addEventListener("resize", handleWindowWidthChange);
//     handleWindowWidthChange();
//     return function cleanup() {
//       window.removeEventListener("resize", handleWindowWidthChange);
//     };
//   });

//   return (
//     <Drawer
//       style={{position:'sticky'}}
//       variant={isPermanent ? "permanent" : "temporary"}
//       className={classNames(classes.drawer, {
//         [classes.drawerOpen]: isSidebarOpened,
//         [classes.drawerClose]: !isSidebarOpened,
//       })}
//       classes={{
//         paper: classNames({
//           [classes.drawerOpen]: isSidebarOpened,
//           [classes.drawerClose]: !isSidebarOpened,
//         }),
//       }}
//       open={isSidebarOpened}
//     >
//       <div className={classes.toolbar} />
//       <div className={classes.mobileBackButton}>
//         <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
//           <ArrowBackIcon
//             classes={{
//               root: classNames(classes.headerIcon, classes.headerIconCollapse),
//             }}
//           />
//         </IconButton>
//       </div>
//       <List className={classes.sidebarList}>
//         {structure.map(link => (
//           <SidebarLink
//             key={link.id}
//              location={location}
//             isSidebarOpened={isSidebarOpened}
//             {...link}
//           />
//         ))}
//       </List>
//     </Drawer>
//   );

//   // ##################################################################
//   function handleWindowWidthChange() {
//     var windowWidth = window.innerWidth;
//     var breakpointWidth = theme.breakpoints.values.md;
//     var isSmallScreen = windowWidth < breakpointWidth;

//     if (isSmallScreen && isPermanent) {
//       setPermanent(false);
//     } else if (!isSmallScreen && !isPermanent) {
//       setPermanent(true);
//     }
//   }
// }

// const mapStateToProps = (state)=> {
//   console.log("in layout  mapstatetoprops",state)
//   return {
//     isSidebarOpened: state.LayoutReducer.isSidebarOpened
//   
// }
// export default withRouter(Sidebar)

function Sidebar({ location, isSidebarOpened },props) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  isSidebarOpened = props;
  // var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      style={{position:'sticky',background:"#fafbfc"}}
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);

