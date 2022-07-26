import { useEffect, useState } from "react";
import * as api from "../api-calls/api-get";

export default function Comments({ currentArticle, id }) {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchCommentsByArticleId(id).then((response) => {
      setComments(response);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      <button value={currentArticle.comment_count}>
        View Comments ({currentArticle.comment_count})
      </button>
      {isLoading ? (
        <p>Loading Comments</p>
      ) : (
        <ul>
          {comments.map((comment) => {
            return (
              <li>
                <p>{comment.author}: </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
