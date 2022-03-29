import React, { useEffect, useState } from "react";
import ArticleCard2 from './ArticleCard2.jsx'


const Articlesingle = (article) => {

        const [article, setArticle] = useState({});
        const { id } = useParams();
              
        const fetchArticle = async () => {
          const data = await axios.get('https://reqres.in/api/articles')
          setArticle(data.article);
        };

        useEffect(() => {
          fetchArticle();
        }, []);

        const articleShow = articles.map((article) => {
            return (
              <li key={article.id}>
                <ArticleCard2 article={article} />
                <a
                  href={article.headline}
                  onClick={() => {
                    fetcharticle(article.id)
                  }}
                ></a>
              </li>
            )
          })
          return (
            <>
              <ul data-cy="articles-list">{articleShow}</ul>
            </>
          )
        }

export default Articlesingle