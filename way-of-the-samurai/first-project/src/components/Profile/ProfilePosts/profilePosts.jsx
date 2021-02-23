import Post from './post/Post';
import { connect } from 'react-redux';

const ProfilePosts = (props) => {
  const postElements = props.postsData
    .map((post, i) => <Post name={post.name} account={post.account} content={post.content} key={i} id={post.id} />)

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

const ProfilePostsC = connect(mapStateToProps)(ProfilePosts)

export default ProfilePostsC