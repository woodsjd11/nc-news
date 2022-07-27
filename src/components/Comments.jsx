import { useEffect, useState } from "react";
import * as api from "../api-calls/api-get";

import SubmitComment from "./SubmitComment";

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

  //handle date formatting
  function formatDate(comment) {
    const commentDate = comment.created_at;
    const formattedDate = /^\d{4}/.test(commentDate)
      ? commentDate.split("T")[0].split("-").reverse().join("-")
      : commentDate;
    return formattedDate;
  }

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
              <SubmitComment id={id}/>
              <ul style={{ listStyle: "none" }}>
                {comments.map((comment) => {
                  comment.created_at = formatDate(comment);
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
