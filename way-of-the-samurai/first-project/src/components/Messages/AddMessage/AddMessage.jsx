import React from 'react';
import './style.scss'
import { Button } from '@material-ui/core';
import useStyles from './style';

const AddMessage = (props) => {
  const classes = useStyles()
  const newPostElement = React.createRef();

  const addMessage = () => {
    props.addMessage()
  }

  const onMessageChange = ({ target }) => {
    const newText = target.value
    props.onMessageChange(newText)
  }

  return (
    <div className="create-message-wrapper">
      <textarea
        className="create-post_input"
        placeholder="Enter you message here"
        value={props.newMessageContent}
        onChange={onMessageChange}
        ref={newPostElement}
      />
      <Button
        className={classes.root}
        variant="contained"
        color="primary"
        onClick={addMessage}
      >
        CREATE POST
      </Button>
    </div>
  )
}

export default AddMessage