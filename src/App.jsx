import React from "react";
import Articles from "./Components/Articles.jsx";
import { Routes, Route } from "react-router-dom";
import Article from "./Components/Article.jsx";
import NavBar from "./Components/NavBar.jsx";

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/article/:id" element={<Article />} />
      
    </Routes>
        </>
  );
};
export default App;

// <Route path="/:category" element={<ArticleCollection />} />
