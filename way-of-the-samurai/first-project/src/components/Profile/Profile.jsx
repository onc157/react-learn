import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileCreatePostC from './ProfileCreatePost/ProfileCreatePostC';
import ProfilePostsC from './ProfilePosts/profilePosts';

const Profile = (props) => {
  return (
    <>
      <ProfileInfo profile={props.profile} />
      <ProfileCreatePostC />
      <ProfilePostsC />
    </>
  )
}

export default Profile