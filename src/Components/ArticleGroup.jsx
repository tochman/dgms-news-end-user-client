import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "semantic-ui-react";

const ArticleGroup = () => {
  const { category } = useParams();
  const { articles } = useSelector((state) => state);

  const articlesList = articles[category]?.map((article) => {
    return (
      <li key={article.id} style={{ listStyleType: "none" }}>
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
      <div data-cy="category_header">{category}</div>
      <ul>{articlesList}</ul>
    </Container>
  );
};

export default ArticleGroup;
