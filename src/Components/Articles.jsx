import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ArticleCard from './ArticleCard.jsx'

const Articles = () => {
  const [articles, setArticles] = useState([])

  const fetchArticles = async () => {
    const response = await axios.get('api/articles')
    setArticles(response.data.articles)
  }
  useEffect(() => {
    fetchArticles()
  }, [])

  const setActiveArticle = async (id) => {
      const response = await axios.get("api/articles", {
        params: { article_id: id},
      });
  };

  const articleList = articles.map((article) => {
    return (
      <li key={article.id}>
        <ArticleCard article={article} />
        <button data-cy="show-button"
        onClick={() => setActiveArticle(article.id)}
        className="ui button"
        ></button>
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
