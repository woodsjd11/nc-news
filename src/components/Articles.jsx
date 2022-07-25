import * as api from "../api-calls/api-get";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Articles({ currentTopic }) {
  const { topic } = useParams();
  //allows topic filtering to work when user manually updates url
  currentTopic = topic;

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //functionality will be added
  const [likeCount, setLikeCount] = useState();

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles().then((articleData) => {
      if (currentTopic) {
        articleData = articleData.filter((article) => {
          return article.topic === currentTopic;
        });
      }
      setArticles(articleData);
      setIsLoading(false);
    });
  }, [currentTopic]);

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
            <button>View Article</button>
            <button value={article.votes}>{article.votes} Likes</button>
          </li>
        );
      })}
    </ul>
  );
}
