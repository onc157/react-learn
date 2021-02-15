const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_CONTENT = 'UPDATE-NEW-MESSAGE-CONTENT';

const messagesReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_CONTENT:
      state.newMessageContent = action.newContent
      return state
    case SEND_MESSAGE:
      const message = state.newMessageContent
      state.messagesData.push({ id: 4, message: message })
      state.newMessageContent = ''
      return state
    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageContentCreator = (content) => ({
  type: UPDATE_NEW_MESSAGE_CONTENT,
  newContent: content
})

export default messagesReducer