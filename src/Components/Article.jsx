import React from 'react'
import { Card } from 'semantic-ui-react'

const Article = ({article}) => {
  return (
    <Card
      header={article.title}
      meta={`By: ${article.author}`}
      image={article.image}
      body={article.body}
      description={article.headline}
    ></Card>
  )
}

export default Article