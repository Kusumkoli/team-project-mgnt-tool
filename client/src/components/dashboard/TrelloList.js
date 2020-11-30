import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';


import TrelloCard from "./TrelloCard";




const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "grey",
		maxWidth: 300,
		margin: theme.spacing(1),
		padding: theme.spacing(2)
	},
}));


const TrelloList = ({ title, cards }) => {
	const classes = useStyles();
	console.log(title);
	console.log(cards);

	return(
		<>
			<div className={classes.root}>
				<h6>{title}</h6>
		        { cards.map(card => {
		            <TrelloCard text={ card.text } />
		        })}    
			</div>
	    </>
	)
}

export default TrelloList;



