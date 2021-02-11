import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfilePosts from './ProfilePosts/profilePosts';
import ProfileCreatePost from './ProfileCreatePost/ProfileCreatePost';

const Profile = (props) => {
  return (
    <>
      <ProfileHeader />
      <ProfileCreatePost />
      <ProfilePosts postsData={props.state.postsData} />
    </>
  )
}

export default Profile