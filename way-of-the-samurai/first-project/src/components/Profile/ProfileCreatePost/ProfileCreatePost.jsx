import React from 'react';
import './style.scss'
import { Button } from '@material-ui/core';
import useStyles from './style';
import { addPostActionCreator, updateNewPostContentActionCreator } from '../../../redux/reducers/profile-reducer';

const ProfileCreatePost = (props) => {
  const classes = useStyles()

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }


  const onPostChange = () => {
    const newText = newPostElement.current.value
    const action = updateNewPostContentActionCreator(newText);
    props.dispatch(action)
  }

  return (
    <div className="create-post-wrapper">
      <textarea
        className="create-post_input"
        placeholder="Enter you message here"
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostContent}
      />
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