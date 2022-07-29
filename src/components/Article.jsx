import { useEffect, useState } from "react";
import * as api from "../api-calls/api-get";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import "../Styling/Article.css";

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
    return <p className="errormessage">{error.message}</p>;
  }
  return isLoading ? (
    <p>Loading Content...</p>
  ) : (
    <div className="singlearticle">
      <h2>{currentArticle.title}</h2>
      <br />
      <h5>{articleDate.split("T")[0].split("-").reverse().join("-")}</h5>
      <br />
      <h4>By {currentArticle.author}</h4>
      <br />
      <p className="articlebody">{currentArticle.body}</p>
      <br/>
      {/* like button and comment buttons are currently only aesthetic */}
      <div className="interactiveelems">
        <button className="likebutton">Like</button>
        <Comments currentArticle={currentArticle} id={article_id} />
      </div>
    </div>
  );
}
