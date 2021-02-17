import React from 'react';
import './style.scss'
import { addPostActionCreator, updateNewPostContentActionCreator } from '../../../redux/reducers/profile-reducer';
import ProfileCreatePost from './ProfileCreatePost';
import { connect } from 'react-redux';

const MapStateToProps = (state) => {
  return {
    newPostContent: state.profilePage.newPostContent
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostContent: (newText) => {
      dispatch(updateNewPostContentActionCreator(newText))
    },
  }
}

const ProfileCreatePostContainer = connect(MapStateToProps, MapDispatchToProps)(ProfileCreatePost)

export default ProfileCreatePostContainer