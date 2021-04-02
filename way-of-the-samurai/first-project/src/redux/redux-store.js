import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import profileReducer from './reducers/profile-reducer'
import messagesReducer from './reducers/messages-reducer'
import sidebarReducer from './reducers/sidebar-reducer'
import usersReducer from './reducers/users-reducer'
import authReducer from './reducers/auth-reducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
  )
)

window.store = store

export default store