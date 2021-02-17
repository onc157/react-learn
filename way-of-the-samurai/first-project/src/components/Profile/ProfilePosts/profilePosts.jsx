import Post from './post/Post';
import { connect } from 'react-redux';

const ProfilePosts = (props) => {
  const postElements = props.postsData
    .map((post) => <Post name={post.name} account={post.account} content={post.content} id={post.id} />)

  return (
    <>
      {postElements}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData
  }
}

const ProfilePostsW = connect(mapStateToProps)(ProfilePosts)

export default ProfilePostsW