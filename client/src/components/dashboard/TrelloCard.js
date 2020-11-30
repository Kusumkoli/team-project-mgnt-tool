import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 275,
  },
  title: {
    fontSize: 14,
  }
});

const TrelloCard = ({ text }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
	        <Typography className={classes.title} color="textSecondary" gutterBottom>
	          { text }
	        </Typography>
	    </Card>
	);
}

export default TrelloCard;