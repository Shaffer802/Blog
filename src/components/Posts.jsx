

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}

      <h1>This is the Posts page</h1>

    </div>
  );
}

export default Posts;