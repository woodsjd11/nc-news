import * as api from "../api-calls/api-get";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LikeButton from "../components/LikeButton";

export default function ArticlesList({ currentTopic }) {
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
            <h3>{article.title}</h3>
            <p>Author: {article.author}</p>
            <Link to={`/article/${article.article_id}`}>View Article</Link>
            <LikeButton value={article.votes} id={article.article_id} />
          </li>
        );
      })}
    </ul>
  );
}
