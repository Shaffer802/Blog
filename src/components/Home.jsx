import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="headers">Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      <div className="post-preview">
        <h2 className="post-preview-title">Latest Posts</h2>
        <p className="post-preview-expert">Post exerpt</p>
      </div>
    </div>
  );
}

export default Home;