import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfilePosts from './ProfilePosts/profilePosts';
import ProfileCreatePostContainer from './ProfileCreatePost/ProfileCreatePostContainer';

const Profile = (props) => {
  const state = props.store.getState()

  return (
    <>
      <ProfileHeader />
      <ProfileCreatePostContainer />
      <ProfilePosts postsData={state.profilePage.postsData}/>
    </>
  )
}

export default Profile