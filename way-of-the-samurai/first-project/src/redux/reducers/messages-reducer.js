const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_CONTENT = 'UPDATE-NEW-MESSAGE-CONTENT';

const messagesReducer = (state, action) => {

  if (action.type === UPDATE_NEW_MESSAGE_CONTENT) {
    state.newMessageContent = action.newContent
  } else if (action.type === SEND_MESSAGE) {
    const message = state.newMessageContent
    state.messagesData.push({id: 4, message: message})
    state.newMessageContent = ''
  }
  return state
}

export default messagesReducer