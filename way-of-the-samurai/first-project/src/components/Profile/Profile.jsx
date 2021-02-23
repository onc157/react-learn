import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileCreatePostContainer from './ProfileCreatePost/ProfileCreatePostContainer';
import ProfilePostsC from './ProfilePosts/profilePosts';

const Profile = (props) => {
  return (
    <>
      <ProfileHeader profile={props.profile} />
      <ProfileCreatePostContainer />
      <ProfilePostsC />
    </>
  )
}

export default Profile