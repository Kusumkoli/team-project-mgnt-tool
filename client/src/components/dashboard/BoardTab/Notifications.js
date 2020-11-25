import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
//import { ToastContainer } from "react-toastify";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import CreateIcon from "@material-ui/icons/Create";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";
//list
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import Collapse from "@material-ui/core/Collapse";

// styles
import useStyles from "./styles";

// components
//import Widget from "../../components/Widget/Widget";
//import PageTitle from "../../components/PageTitle/PageTitle";
import Notification from "../Notification/Notification";
import { Typography, Button } from "../Typography";
//import Calendar from "../../components/Calendar/Calendar";
// import UpcomingDeadlines from '../../pages/companyinfo/innerTabs/UpcomingDeadlines';



export default function NotificationsPage(props) {
  var classes = useStyles();



  const [expanded, setExpanded] = React.useState(true);
  const [width, setWidth] = useState(true);

  // local
  var [notificationsPosition, setNotificationPosition] = useState(2);
  var [errorToastId, setErrorToastId] = useState(null);

  
  const handleExpandClick = () => {
    console.log("handle expand click");
    // setExpanded(!expanded);
    // setWidth(!width);
    //setCalenderData(emptyCalendar);
  };

  return (
    <>
      <div className={classes.outerDiv}>
        <div className={classes.mainContent}>
          <div className={classes.displayFlex}>
            <Typography variant="h4" component="span">
              Dashboard
              <IconButton
                component="span"
                style={{ color: "#4e9ffa", fontSize: 10 }}
              >
                <CreateIcon />
              </IconButton>
            </Typography>
            <div>
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
              >
                <Button>Prioritize</Button>
                <Button>Check</Button>
                <Button>Create</Button>
              </ButtonGroup>
            </div>
          </div>
          <Grid container spacing={4} direction="row" alignItems="center" style={{paddingTop: 10, paddingLeft: 15}}>
            <Grid item className={classes.topGridItem} style={{margin: '16px 16px 16px 0px'}}>
              <div style={{padding: '5px 10px'}}>
                <Typography variant="h2">43</Typography>
                <Typography variant="subtitle1">Tasks Completed</Typography>
              </div>
              <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', padding: 10}}>
                < CreateIcon />
              </div>
            </Grid>
            <Grid item className={classes.topGridItem} style={{margin: '16px 16px 16px 0px', color: 'grey', backgroundColor: 'white'}}>
              <div style={{padding: '5px 10px'}}>
                <Typography variant="h2">43</Typography>
                <Typography variant="subtitle1">Tasks Completed</Typography>
              </div>
              <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', padding: 10}}>
                < CreateIcon />
              </div>
            </Grid>
            <Grid item className={classes.topGridItem} style={{margin: '16px 16px 16px 0px', color: 'grey', backgroundColor: 'white'}}>
              <div style={{padding: '5px 10px'}}>
                <Typography variant="h2">43</Typography>
                <Typography variant="subtitle1">Tasks Completed</Typography>
              </div>
              <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', padding: 10}}>
                < CreateIcon />
              </div>
            </Grid>
            <Grid item>
              <Avatar style={{backgroundColor: 'white'}}>
                <ArrowForwardOutlinedIcon style={{ color: '#4e9ffa', backgroundColor: 'white'}}/>
              </Avatar>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};