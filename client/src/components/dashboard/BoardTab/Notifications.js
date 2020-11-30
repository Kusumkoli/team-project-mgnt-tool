import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import CreateIcon from "@material-ui/icons/Create";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

// styles
import useStyles from "./styles";

// components
import Notification from "../Notification/Notification";
import { Typography, Button } from "../Typography";
import TrelloList from "../TrelloList";


const NotificationsPage = () =>{
  var classes = useStyles();

  const { lists } = this.props;

  return (
    <>
      <div className={classes.outerDiv}>
        <div className={classes.mainContent}>
          <div className={classes.displayFlex}>
            <Typography variant="h4" component="span">
              <IconButton
                component="span"
                style={{ color: "#4e9ffa", fontSize: 10 }}
              >
                <CreateIcon />
              </IconButton>
              Dashboard
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
      {lists.map( list => {
        return <TrelloList title={list.title} cards={list.cards} />  
      })}
    </>
  );
};

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(NotificationsPage);