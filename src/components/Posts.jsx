import "./Posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post-preview">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;