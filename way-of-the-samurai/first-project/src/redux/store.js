import profileReducer from './reducers/profile-reducer';
import messagesReducer from './reducers/messages-reducer';
import sidebarReducer from './reducers/sidebar-reducer';

export const store = {
  _state: {
    messagesPage: {
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
    },
    profilePage: {
      postsData: [
        {
          name: 'CaliforniaDream',
          account: '@californiaDream',
          content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          id: 1
        },
        {
          name: 'Northwest Agency',
          account: '@NorthwestAgency',
          content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          id: 2
        }
      ],
      newPostContent: '',
    }
  },
  _subscriber() {},

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._subscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
    this._subscriber(this._state)
  }
}