const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CONTENT = 'UPDATE-NEW-POST-CONTENT';

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
}

const profileReducer = (state = initialState, action) => {
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