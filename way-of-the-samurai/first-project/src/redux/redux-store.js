import { combineReducers, createStore } from 'redux';
import profileReducer from './reducers/profile-reducer';
import messagesReducer from './reducers/messages-reducer';
import sidebarReducer from './reducers/sidebar-reducer';
import usersReducer from './reducers/users-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
})

const store = createStore(reducers)

export default store