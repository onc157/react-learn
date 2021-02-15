import React from 'react';
import './style.scss'
import { Button } from '@material-ui/core';
import useStyles from './style';
import { sendMessageCreator, updateNewMessageContentCreator } from '../../../redux/reducers/messages-reducer';

const ProfileCreatePost = (props) => {
  const classes = useStyles()
  const newMessageContent = props.newMessageContent
  const newPostElement = React.createRef();

  const addMessage = () => {
    props.dispatch(sendMessageCreator())
  }

  const onMessageChange = ({ target }) => {
    const newText = target.value
    props.dispatch(updateNewMessageContentCreator(newText))
  }

  return (
    <div className="create-message-wrapper">
      <textarea
        className="create-post_input"
        placeholder="Enter you message here"
        value={newMessageContent}
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

export default ProfileCreatePost