import React from 'react';
import './style.scss'
import { Button } from '@material-ui/core';
import useStyles from './style';

const ProfileCreatePost = (props) => {
  const classes = useStyles()

  const newPostElement = React.createRef();

  const addMessage = () => {
    const content = newPostElement.current.value
    alert(content)
  }

  return (
    <div className="create-message-wrapper">
      <textarea
        className="create-post_input"
        placeholder="Enter you message here"
        ref={newPostElement}
      ></textarea>
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

export default ProfileCreatePost