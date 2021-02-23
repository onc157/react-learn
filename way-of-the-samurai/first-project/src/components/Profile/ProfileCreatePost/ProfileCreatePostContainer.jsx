import React from 'react';
import './style.scss'
import { addPost, updateNewPostContent } from '../../../redux/reducers/profile-reducer';
import ProfileCreatePost from './ProfileCreatePost';
import { connect } from 'react-redux';

const MapStateToProps = (state) => {
  return {
    newPostContent: state.profilePage.newPostContent
  }
}

const ProfileCreatePostContainer = connect(MapStateToProps, { addPost, updateNewPostContent})(ProfileCreatePost)

export default ProfileCreatePostContainer