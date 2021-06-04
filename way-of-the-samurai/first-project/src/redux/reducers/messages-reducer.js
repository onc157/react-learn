const SEND_MESSAGE = 'SEND-MESSAGE';

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
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const message = action.message;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 4, message: message }],
      }
    default:
      return state
  }
}

export const sendMessage = (message) => ({ type: SEND_MESSAGE, message })

export default messagesReducer