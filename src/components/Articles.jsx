import * as api from "../api-calls/api-get";
import { useEffect, useState } from "react";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <p>Loading Content...</p>
  ) : (
    <ul>
      {articles.map((article) => {
        return (
          <li
            key={article.title + article.created_at}
            style={{ listStyle: "none" }}
          >
            <h2>{article.title}</h2>
            <p>Author: {article.author}</p>
          </li>
        );
      })}
    </ul>
  );
}
