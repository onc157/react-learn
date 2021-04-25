import { profileAPI } from '../../api/api';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_CONTENT = 'UPDATE-NEW-POST-CONTENT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
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
  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        name: 'DubaiAirlines',
        account: '@DubaiAirlines',
        content: state.newPostContent,
        id: 3
      };

      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostContent: '',
      }
    case UPDATE_NEW_POST_CONTENT:
      return {
        ...state,
        newPostContent: action.newText
      }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }
}

export const addPost = () => ({ type: ADD_POST })

export const updateNewPostContent = (newText) => ({
  type: UPDATE_NEW_POST_CONTENT,
  newText,
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
})

export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response))
    })
}

export const getStatus = (status) => (dispatch) => {
  profileAPI.getStatus(status)
    .then(response => {
      dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
}

export default profileReducer