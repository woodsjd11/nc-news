import { useEffect, useState } from "react";
import * as api from "../api-calls/api-get";

export default function Comments({ currentArticle, id }) {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.fetchCommentsByArticleId(id).then((response) => {
      setComments(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <button
        value={currentArticle.comment_count}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {!isOpen ? "View Comments" : "Hide Comments"} (
        {currentArticle.comment_count})
      </button>
      {isLoading ? (
        <p>Loading Comments</p>
      ) : (
        <>
          {isOpen && (
            <div>
              <ul style={{ listStyle: "none" }}>
                {comments.map((comment) => {
                  const commentDate = comment.created_at;
                  // provides same result on re-render
                  const formattedDate = /^\d{4}/.test(commentDate)
                    ? commentDate.split("T")[0].split("-").reverse().join("-")
                    : commentDate;
                  comment.created_at = formattedDate;
                  return (
                    <li key={comment.comment_id}>
                      <p>
                        <u>
                          {comment.author} {comment.created_at}
                        </u>
                      </p>
                      <p>{comment.body}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
