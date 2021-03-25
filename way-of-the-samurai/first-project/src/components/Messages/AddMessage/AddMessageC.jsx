import React from 'react';
import './style.scss'
import { sendMessage, updateNewMessageContent } from '../../../redux/reducers/messages-reducer';
import AddMessage from './AddMessage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newMessageContent: state.messagesPage.newMessageContent
  }
}

const AddMessageC = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageContent
})(AddMessage)

export default AddMessageC