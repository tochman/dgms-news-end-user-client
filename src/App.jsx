import React from "react";
import Articles from "./Components/Articles.jsx";
import { Routes, Route } from "react-router-dom";
import Article from "./Components/Article.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/article/:id" element={<Article />} />
    </Routes>
  );
};
export default App;
