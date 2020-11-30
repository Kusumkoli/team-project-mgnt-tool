import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
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


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}
      {...other} >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const NotificationsPage = (props) =>{
  var classes = useStyles();

  //const { lists } = this.props;
  console.log(props);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Cards" {...a11yProps(0)} />
            <Tab label="Chat" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div className={classes.oneBoard}>
            {props.lists.map( list => {
              return <TrelloList title={list.title} cards={list.cards} />  
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        </TabPanel>
    </>
  );
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(NotificationsPage);