import React from 'react';
import './style.scss'
import { sendMessageCreator, updateNewMessageContentCreator } from '../../../redux/reducers/messages-reducer';
import AddMessage from './AddMessage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newMessageContent: state.messagesPage.newMessageContent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(sendMessageCreator())
    },
    onMessageChange: (newText) => {
      dispatch(updateNewMessageContentCreator(newText))
    }
  }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)

export default AddMessageContainer