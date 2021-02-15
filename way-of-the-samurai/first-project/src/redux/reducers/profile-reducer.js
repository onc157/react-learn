const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CONTENT = 'UPDATE-NEW-POST-CONTENT';

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    const newPost = {
      name: 'DubaiAirlines',
      account: '@DubaiAirlines',
      content: state.newPostContent,
      id: 3
    }

    state.postsData.push(newPost)
    state.newPostContent = ''
  } else if (action.type === UPDATE_NEW_POST_CONTENT) {
    state.newPostContent = action.newText
  }

  return state
}

export default profileReducer