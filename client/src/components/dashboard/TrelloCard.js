import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 275,
    color: "black",
    backgrounColor: "grey"
  },
  title: {
    fontSize: 14,
    color: "black"
  }
});

const TrelloCard = ({ text }) => {
	const classes = useStyles();
	console.log("text: ", text);

	return (
		<Card className={classes.root}>
			<CardContent>
		        <Typography className={classes.title} gutterBottom>
		          { text }
		        </Typography>
		    </ CardContent>
	    </Card>
	);
}

export default TrelloCard;