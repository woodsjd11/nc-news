import { useEffect, useState } from "react";
import * as api from "../api-calls/api-get";
import { useParams } from "react-router-dom";

export default function Article() {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState();
  const [articleDate, setArticleDate] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchArticlebyId(article_id)
      .then((response) => {
        setCurrentArticle(response);
        setArticleDate(response.created_at);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, []);
  // guard statement
  if (error) {
    return <p>{error.message}</p>;
  }
  return isLoading ? (
    <p>Loading Content...</p>
  ) : (
    <div>
      <h2>{currentArticle.title}</h2>
      <h5>{articleDate.split("T")[0].split("-").reverse().join("-")}</h5>
      <h4>By {currentArticle.author}</h4>
      <p>{currentArticle.body}</p>
      {/* like button and comment buttons are currently only aesthetic */}
      <button>Like</button>
      <button>View Comments ({currentArticle.comment_count})</button>
    </div>
  );
}
