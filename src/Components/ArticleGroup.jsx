import React from "react";
import { Container } from "semantic-ui-react";
import { useParams } from "react-router-dom";

const ArticleGroup = () => {
  const { category } = useParams();

  return (
    <Container>
      <div data-cy="category_header">{category}</div>
    </Container>
  );
};

export default ArticleGroup;
