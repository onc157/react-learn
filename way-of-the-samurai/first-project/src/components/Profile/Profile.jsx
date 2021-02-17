import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileCreatePostContainer from './ProfileCreatePost/ProfileCreatePostContainer';
import ProfilePostsW from './ProfilePosts/profilePosts';

const Profile = () => {
  return (
    <>
      <ProfileHeader />
      <ProfileCreatePostContainer />
      <ProfilePostsW/>
    </>
  )
}

export default Profile