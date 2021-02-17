const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_CONTENT = 'UPDATE-NEW-MESSAGE-CONTENT';

const initialState = {
  usersData: [
    {id: 1, name: 'Albert'},
    {id: 2, name: 'Inokentiy'},
    {id: 3, name: 'KuraveLivre'},
    {id: 4, name: 'MrAnabolik'},
    {id: 5, name: 'ProstoVasya'},
    {id: 6, name: 'IamSerega'},
  ],
  messagesData: [
    {id: 1, message: 'Do you think about me?'},
    {id: 2, message: 'She was beautiful'},
    {id: 3, message: 'This car is not bad'},
  ],
  newMessageContent: '',
}

const messagesReducer = (state = initialState, action) => {
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