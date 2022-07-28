import { useEffect, useState, useContext } from "react";
import * as api from "../api-calls/api-get";
import DeleteComment from "./DeleteComment";
import SubmitComment from "./SubmitComment";
import { UserContext } from "../Contexts/UserContext";

export default function Comments({ currentArticle, id }) {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  // delete button only appears after api runs successfully
  const [isOptimised, setIsOptimised] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    api.fetchCommentsByArticleId(id).then((response) => {
      setComments(response);
      setIsLoading(false);
    });
  }, [setComments]);

  //handle date formatting
  function formatDate(comment) {
    const commentDate = comment.created_at;
    const formattedDate = /^\d{4}/.test(commentDate)
      ? commentDate.split("T")[0].split("-").reverse().join("-")
      : commentDate;
    return formattedDate;
  }

  function deleteCondition(author) {
    if (user.username === author && !isOptimised) {
      return true;
    }
    return false;
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
              <SubmitComment
                comments={comments}
                setComments={setComments}
                id={id}
                setIsOptimised={setIsOptimised}
              />
              <ul style={{ listStyle: "none" }}>
                {comments.map((comment) => {
                  // "just now" used for optimistic rendering
                  if (comment.created_at !== "(Just Now)") {
                    comment.created_at = formatDate(comment);
                  }
                  return (
                    <li key={comment.comment_id}>
                      <p>
                        <u>
                          {comment.author} {comment.created_at}
                        </u>
                      </p>
                      <p>{comment.body}</p>
                      {/* user can only delete own comments */}
                      {deleteCondition(comment.author) && (
                        <DeleteComment
                          commentId={comment.comment_id}
                          setComments={setComments}
                          comments={comments}
                        />
                      )}
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
