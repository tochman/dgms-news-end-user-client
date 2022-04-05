import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

const Articles = () => {
  const { articles } = useSelector((state) => state);

  const articleList = articles.map((article) => {
    return (
      <li key={article.id} style={{ listStyleType: "none" }}>
        {/* <ArticleCard article={article} /> */}
        <Link to={`/article/${article.id}`}>
          <img
            src={article.image}
            alt=""
            style={{ height: 200 + "px", width: "auto" }}
          />
          <div data-cy="show-button">
            <h1>{article.title}</h1>{" "}
          </div>
        </Link>
      </li>
    );
  });
  return (
    <Container>
      <ul data-cy="articles-list">{articleList}</ul>
    </Container>
  );
};

export default Articles;
