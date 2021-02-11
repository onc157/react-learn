import React from 'react';
import './style.scss'
import { Button } from '@material-ui/core';
import useStyles from './style';

const ProfileCreatePost = (props) => {
  const classes = useStyles()

  const newPostElement = React.createRef();

  const addPost = () => {
    const content = newPostElement.current.value
    alert(content)
  }

  return (
    <div className="create-post-wrapper">
      <textarea
        className="create-post_input"
        placeholder="Enter you message here"
        ref={newPostElement}
      ></textarea>
      <Button
        className={classes.root}
        variant="contained"
        color="primary"
        onClick={addPost}
      >
        CREATE POST
      </Button>
    </div>
  )
}

export default ProfileCreatePost