import React, { useEffect } from "react";
import { Card, Container } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ArticlesAPI from '../modules/ArticlesAPI'


const Article = () => {
  const params = useParams();
  const { activeArticle } = useSelector((state) => state);
  let article = activeArticle;

  useEffect(() => {
    ArticlesAPI.show(parseInt(params.id))
  }, []);
  return (
    <Container>
      {article && (
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
      )}
    </Container>
  );
};

export default Article;
