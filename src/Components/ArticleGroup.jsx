import React from 'react'
import { Container } from "semantic-ui-react";
import { useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
//import Article from './Article';

const ArticleGroup = () => {
const { category } = useParams();
//const classes = useStyles();
//const [articles, setArticles] = useState([]);


  return (
    <Container>
      <div data-cy="category_header">
      {category}
        {/* {" "}
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
  )
}






export default ArticleGroup


