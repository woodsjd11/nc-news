import * as api from "../api-calls/api-get";
import { useEffect, useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import LikeButton from "../components/LikeButton";
import "../Styling/ArticleList.css";

export default function ArticlesList() {
  const { topic } = useParams();
  const [params] = useSearchParams();
  const sortBy = params.get("sort_by");
  const order = params.get("order");
  //allows topic filtering to work when user manually updates url

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles(topic, sortBy, order).then((articleData) => {
      setArticles(articleData);
      setIsLoading(false);
    });
  }, [topic, sortBy, order]);

  return isLoading ? (
    <p>Loading Content...</p>
  ) : (
    <ul className="articlelist">
      {articles.map((article) => {
        return (
          <li
            className="articleinlist"
            key={article.title + article.created_at}
            style={{ listStyle: "none" }}
          >
            <h3 className="articletitle">{article.title}</h3>
            <br />
            <p className="author">Author: {article.author}</p>
            <br />
            <div>
              <Link className="articlelink" to={`/article/${article.article_id}`}>View Article</Link>
              <LikeButton value={article.votes} id={article.article_id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
