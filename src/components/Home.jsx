import "./Home.css";

const Home = ({ posts }) => {
  return (
    <div className="home">
      <h1 className="headers">Welcome to the Home Page</h1>
      <p>Check out the latest posts.</p>

      <div className="posts">
        {posts.slice(0 ,5).map((post) => (
          <div key={post.id} className="post-preview">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
      ))}
    </div>
    </div>
  );
}

export default Home;