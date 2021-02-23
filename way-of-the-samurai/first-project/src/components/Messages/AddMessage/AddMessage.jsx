import React from 'react';
import './style.scss'
import { Button } from '@material-ui/core';
import useStyles from './style';

const AddMessage = (props) => {
  const classes = useStyles()
  const newPostElement = React.createRef();

  const sendMessage = () => {
    props.sendMessage()
  }

  const updateNewMessageContent = ({ target }) => {
    const newText = target.value
    props.updateNewMessageContent(newText)
  }

  return (
    <div className="create-message-wrapper">
      <textarea
        className="create-post_input"
        placeholder="Enter you message here"
        value={props.newMessageContent}
        onChange={updateNewMessageContent}
        ref={newPostElement}
      />
      <Button
        className={classes.root}
        variant="contained"
        color="primary"
        onClick={sendMessage}
      >
        CREATE POST
      </Button>
    </div>
  )
}

export default AddMessage