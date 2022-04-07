import React, { useEffect } from 'react'
import axios from 'axios'
import { Card, Container } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Article = () => {
  let { id } = useParams();
  const dispatch = useDispatch()
  const { activeArticle } = useSelector((state) => state)
  let article = activeArticle

  const fetchArticle = async () => {
    const response = await axios.get(`api/article/${id}`)
    dispatch({ type: 'SET_ACTIVE_ARTICLE', payload: response.data.article })
  }

  useEffect(() => {
    fetchArticle()
  }, [])

  return (
    <Container text>
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
  )
}

export default Article
