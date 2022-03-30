import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ArticleCard from './ArticleCard.jsx'
import {  Link } from 'react-router-dom'

const Articles = () => {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState({})

  const fetchArticles = async () => {
    const response = await axios.get('api/articles')
    setArticles(response.data.articles)
  }
  useEffect(() => {
    fetchArticles()
  }, [])

  const setActiveArticle = async (id) => {
    const response = await axios.get('api/articles', {
      params: { article_id: id },
    })
    setArticle(response.data.article)
  }

  const articleList = articles.map((article) => {
    return (
      <li key={article.id}>
        <ArticleCard article={article} />
        <Link
          to={`/article/${article.title}`}
          
        >
          <button
            data-cy="show-button"
            // as={NavLink} to={{ pathname: "/Article"}}
            onClick={() => setActiveArticle(article.id)}
            className="ui button"
          ></button>
        </Link>
      </li>
    )
  })
  return (
    <>
      <ul data-cy="articles-list">{articleList}</ul>
    </>
  )
}

export default Articles
