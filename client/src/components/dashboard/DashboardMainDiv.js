import React, { useState } from "react";
import { Grid } from "@material-ui/core";
// import { Close as CloseIcon } from "@material-ui/icons";
// import { ToastContainer, toast } from "react-toastify";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import CreateIcon from "@material-ui/icons/Create";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

//list
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
// import Collapse from "@material-ui/core/Collapse";

// styles
// import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles/DashboardMainDiv.js";

// components
// import Widget from "../../components/Widget/Widget";
//import PageTitle from "../../components/PageTitle/PageTitle";
// import Notification from "../../components/Notification";
// import { Typography, Button } from "../../components/Wrappers/Wrappers";
// import Calendar from "../../components/Calendar/Calendar";
// import UpcomingDeadlines from '../../pages/companyinfo/innerTabs/UpcomingDeadlines';


export default function NotificationsPage() {
  var classes = useStyles();

  return (
    <>
      <div className={classes.outerDiv}>
        <div className={classes.mainContent}>
          <div className={classes.displayFlex}>
            <Typography variant="h2" component="span">
              Your Boards
              <IconButton
                component="span"
                style={{ color: "#4e9ffa", fontSize: 2 }}
              >
                <EventIcon />
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
          <Grid container spacing={4} direction="row" alignItems="center" style={{paddingTop: 10, paddingLeft: 15, paddingBottom: 20, marginBottom: 20}}>
            <Grid item className={classes.topGridItem} style={{margin: '16px 30px 16px 0px'}}>
              <div style={{padding: '5px 10px', height: 70, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                
                <Typography variant="h4">English Team</Typography>
              </div>
              
            </Grid>
            <Grid item className={classes.topGridItem} style={{margin: '16px 30px 16px 0px', color: 'grey', backgroundColor: 'white'}}>
              <div style={{padding: '5px 10px', height: 70, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                
                <Typography variant="h4">Major Project</Typography>
              </div>
            </Grid>
            <Grid item className={classes.topGridItem} style={{margin: '16px 30px 16px 0px', color: 'grey', backgroundColor: 'white'}}>
              <div style={{padding: '5px 10px', height: 70, width: 200, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                
                <Typography variant="h4">Codeblock</Typography>
                <Typography variant="h4">Hackathon</Typography>
              </div>
            </Grid>
            <Grid item>
              <Avatar style={{backgroundColor: 'white'}}>
                <ArrowForwardOutlinedIcon style={{ color: '#4e9ffa', backgroundColor: 'white'}}/>
              </Avatar>
            </Grid>
          </Grid>
          <div className={classes.displayFlex}>
            <Typography variant="h2" component="span">
              Create New Board
              <IconButton
                component="span"
                style={{ color: "#4e9ffa", fontSize: 2 }}
              >
                <CreateIcon />
              </IconButton>
              
            </Typography>
          </div>
          <Grid container spacing={4} direction="row" alignItems="center" style={{paddingTop: 10, paddingLeft: 15, paddingBottom: 20, marginBottom: 20}}>
            
            <Grid item className={classes.topGridItem2} style={{margin: '16px 30px 16px 0px', color: 'grey', backgroundColor: 'white'}}>
              <div style={{padding: '5px 10px', height: 70, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" label="New Board" />
                </form>
              </div>
            </Grid>
            
            <Grid item>
              <Avatar className={classes.hover1} style={{backgroundColor: 'white'}}>
                <AddIcon style={{ color: '#4e9ffa', backgroundColor: 'white'}}/>
              </Avatar>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );  
}

