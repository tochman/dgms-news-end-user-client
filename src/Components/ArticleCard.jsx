import React from 'react'
import { Card } from 'semantic-ui-react'

const ArticleCard = ({article}) => {

  return (

    <Card>
        <Card.Header> Id - {article.id}</Card.Header>
    </Card>
    );
  };

export default ArticleCard