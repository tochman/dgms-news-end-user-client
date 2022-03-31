import React, { useEffect, useState } from "react";
import { Card, Container } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Article = () => {
  const params = useParams();
  const [article, setArticle] = useState({});

  const fetchArticle = async () => {
    const response = await axios.get(`api/articles/${params.id}`);
    setArticle(response.data.article);
  };
  useEffect(() => {
    fetchArticle();
  }, []);
  return (
    <Container>
      <Card
        header={article.title}
        meta={`By: ${article.author}`}
        image={article.image}
        description={() => (
          <>
            <h2>{article.headline}</h2>
            <p data-cy="article-body">{article.body}</p>
          </>
        )}
      ></Card>
    </Container>
  );
};

export default Article;
