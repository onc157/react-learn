import Post from './post/Post';

const ProfilePosts = (props) => {
  const postElements = props.postsData
    .map((post) => <Post name={post.name} account={post.account} content={post.content} id={post.id} />)

  return (
    <>
      {postElements}
    </>
  )
}

export default ProfilePosts