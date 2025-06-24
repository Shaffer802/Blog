import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Posts from "./components/Posts";
import NavBar from "./components/NavBar";

import './App.css';

function App() {

  const posts = [
    { id: 1, title: "First Post", content: "Hello World!" },
    { id: 2, title: "Second Post", content: "Learning React is fun!"},
  ];

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts posts={posts} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
