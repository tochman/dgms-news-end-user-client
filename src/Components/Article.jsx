import React, { useEffect } from "react";
import axios from "axios";
import { Card, Container } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const Article = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { articles, activeArticle } = useSelector((state) => state);
  let article = activeArticle;
  
  
  const fetchArticles = async () => {
    const response = await axios.get("api/articles");
    dispatch({ type: "SET_ARTICLES", payload: response.data.articles });
  };
  useEffect(() => {
    fetchArticles();
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
