import { combineReducers, createStore } from 'redux';
import profileReducer from './reducers/profile-reducer';
import messagesReducer from './reducers/messages-reducer';
import sidebarReducer from './reducers/sidebar-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.store = store

export default store