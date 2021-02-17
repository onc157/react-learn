import { combineReducers, createStore } from 'redux';
import profileReducer from './reducers/profile-reducer';
import messagesReducer from './reducers/messages-reducer';
import sidebarReducer from './reducers/sidebar-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebarPage: sidebarReducer,
})

const store = createStore(reducers)

export default store