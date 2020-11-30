import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Box from '@material-ui/core/Box';
// import PropTypes from 'prop-types';
// import Tab from '@material-ui/core/Tab';
// import CreateIcon from "@material-ui/icons/Create";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

// styles
import useStyles from "./styles";

// components
// import Notification from "../Notification/Notification";
// import { Typography, Button } from "../Typography";
// import TrelloList from "../TrelloList";
import { addBoard } from "../../../actions/boardActions";
import BoardThumbnail from "../BoardThumbnail";

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const CreateTitle = styled.h3`
  font-size: 48px;
  color: white;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const CreateInput = styled.input`
  width: 400px;
  height: 80px;
  font-size: 22px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
  outline-color: blue;
  box-shadow: 0 2px 4px grey;
  align-self: center;
`;

const NotificationsPage = ({ boards, boardOrder, dispatch }) =>{
  var classes = useStyles();

  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = e => {
    setNewBoardTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
  };

  const renderBoards = () => {
    return boardOrder.map(boardID => {
      const board = boards[boardID];

      return (
        <Link
          key={boardID}
          to={`/${board.id}`}
          style={{ textDecoration: "none" }}
        >
          <BoardThumbnail {...board} />
        </Link>
      );
    });
  };

  const renderCreateBoard = () => {
    return (
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <CreateTitle>Create a new Board</CreateTitle>
        <CreateInput
          onChange={handleChange}
          value={newBoardTitle}
          placeholder="Your boards title..."
          type="text"
        />
      </form>
    );
  };

  return (
    <div className={classes.outerDiv}>
      <HomeContainer>
        <Thumbnails>{renderBoards()}</Thumbnails>
        {renderCreateBoard()}
      </HomeContainer>
    </div>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder
});

export default connect(mapStateToProps)(NotificationsPage);