import React from 'react';
import { addPost, updateNewPostContent } from '../../../redux/reducers/profile-reducer';
import ProfileCreatePost from './ProfileCreatePost';
import { connect } from 'react-redux';

const MapStateToProps = (state) => {
  return {
    newPostContent: state.profilePage.newPostContent
  }
}

const ProfileCreatePostC = connect(MapStateToProps, { addPost, updateNewPostContent})(ProfileCreatePost)

export default ProfileCreatePostC