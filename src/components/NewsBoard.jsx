import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(res => res.json()).then(data => setArticles(data.articles));
  }, [])
  

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
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