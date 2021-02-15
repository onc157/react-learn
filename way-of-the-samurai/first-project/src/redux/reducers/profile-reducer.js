const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CONTENT = 'UPDATE-NEW-POST-CONTENT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        name: 'DubaiAirlines',
        account: '@DubaiAirlines',
        content: state.newPostContent,
        id: 3
      }

      state.postsData.push(newPost)
      state.newPostContent = ''
      return state
    case UPDATE_NEW_POST_CONTENT:
      state.newPostContent = action.newText
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostContentActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_CONTENT,
  newText: newText
})

export default profileReducer