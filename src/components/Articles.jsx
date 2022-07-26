import * as api from "../api-calls/api-get";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LikeButton from "../components/LikeButton";

export default function Articles({ currentTopic }) {
  const { topic } = useParams();
  //allows topic filtering to work when user manually updates url
  currentTopic = topic;

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles(currentTopic).then((articleData) => {
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
            {/* <button value={article.votes}>{article.votes} Likes</button> */}
            <LikeButton value={article.votes} id={article.article_id} />
          </li>
        );
      })}
    </ul>
  );
}
