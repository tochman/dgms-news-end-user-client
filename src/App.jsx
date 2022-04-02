import React from "react";
import Articles from "./Components/Articles.jsx";
import { Routes, Route } from "react-router-dom";
import Article from "./Components/Article.jsx";
import NavBar from "./Components/NavBar.jsx";
import ArticleGroup from "./Components/ArticleGroup.jsx";


const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/:category" element={<ArticleGroup />}/>      
    </Routes>
        </>
  );
};
export default App;


