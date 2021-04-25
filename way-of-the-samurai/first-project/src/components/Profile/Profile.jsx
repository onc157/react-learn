import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileCreatePostC from './ProfileCreatePost/ProfileCreatePostC';
import ProfilePostsC from './ProfilePosts/profilePosts';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const Profile = (props) => {
  return (
    <>
      <ProfileInfo profile={props.profile} />
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <ProfileCreatePostC />
      <ProfilePostsC />
    </>
  )
}

export default Profile