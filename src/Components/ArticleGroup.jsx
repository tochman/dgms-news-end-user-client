import React from "react";
//import { Card, Container } from "semantic-ui-react";

const ArticleGroup = () => {
  
  return (
    <Container>
      <div data-cy="category_header">
        {/* {" "}
        ArticleGroup
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
        )} */}
      </div>
    </Container>
  );
  
};

export default ArticleGroup
