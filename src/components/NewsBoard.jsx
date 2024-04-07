import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category?category:"general"}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(res => res.json()).then(data => setArticles(data.articles));
  }, [category])

  return (
    <div className="container-fluid text-center">
      <h2 className="text-center mt-5 mb-4">Latest <span className="badge bg-danger">News</span></h2>
      {
        articles.map((article, key) => {
          return (
            <NewsItem key={key} 
              title={article.title}
              description={article.description}
              url={article.url}
              src={article.urlToImage}
            />
          )
        })
      }
    </div>
  )
}

export default NewsBoard;