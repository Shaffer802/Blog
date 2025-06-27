import { HashRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import About from "./components/About";
import Contact from "./components/Contact";

import './App.css';

function App() {

  const posts = [
    { id: 1, title: "First Post", content: "Hello World!", date: "25/6/2025", readableDate: "25 June 2025", image: "https://placehold.co/200", tag: "#Technology" },
    { id: 2, title: "Second Post", content: "Learning React is fun!", date: "7/4/2025", readableDate: "7 April 2025", image: "https://placehold.co/200", tag: "#" },
    { id: 3, title: "Third Post", content: "Learning React is fun!", date: "17/1/2025", readableDate: "17 January 2025", image: "https://placehold.co/200", tag: "#" },
    { id: 4, title: "Fourth Post", content: "Learning React is fun!", date: "5/2/2025", readableDate: "5 February 2025", image: "https://placehold.co/200", tag: "#" },
    { id: 5, title: "Fifth Post", content: "Learning React is fun!", date: "6/3/2025", readableDate: "6 March 2025", image: "https://placehold.co/200", tag: "#" },
    { id: 6, title: "Sixth Post", content: "Learning React is fun!", date: "24/11/2024", readableDate: "24 November 2024", image: "https://placehold.co/200", tag: "#" },
  ];

  const sortedPosts = [...posts].sort((a, b) => {
    const parseDate = (str) => {
      const [day, month, year] = str.split('/').map(Number);
      return new Date(year, month - 1, day);
    };
    return parseDate(b.date) - parseDate(a.date);
  });

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home posts={sortedPosts} />} />
          <Route path="/posts" element={<Posts posts={sortedPosts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
