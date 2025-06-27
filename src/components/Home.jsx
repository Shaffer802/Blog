import "./Home.css";
import "./Posts.css";

const Home = ({ posts }) => {
  return (
    <div className="home">
      <h1 className="headers">Welcome to the Home Page</h1>
      <p>Check out the latest posts.</p>

      <div className="posts">
        {posts.slice(0 ,5).map((post) => (
          <div key={post.id} className="post-preview">
            <div className="post-content">
              <p>{post.readableDate}, - {post.tag}</p>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
            <div className="post-image">
              <img src={post.image} alt="" />
            </div>
          </div>
      ))}
    </div>
    </div>
  );
}

export default Home;