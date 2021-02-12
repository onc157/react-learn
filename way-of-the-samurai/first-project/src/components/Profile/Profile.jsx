import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfilePosts from './ProfilePosts/profilePosts';
import ProfileCreatePost from './ProfileCreatePost/ProfileCreatePost';

const Profile = (props) => {
  return (
    <>
      <ProfileHeader />
      <ProfileCreatePost
        addPost={props.addPost}
        newPostContent={props.profilePage.newPostContent}
        updateNewPostContent={props.updateNewPostContent}
      />
      <ProfilePosts postsData={props.profilePage.postsData}/>
    </>
  )
}

export default Profile