import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfilePosts from './ProfilePosts/profilePosts';
import ProfileCreatePost from './ProfileCreatePost/ProfileCreatePost';

const Profile = (props) => {
  return (
    <>
      <ProfileHeader />
      <ProfileCreatePost
        newPostContent={props.profilePage.newPostContent}
        dispatch={props.dispatch}
      />
      <ProfilePosts postsData={props.profilePage.postsData}/>
    </>
  )
}

export default Profile