import { useState, useContext } from "react";
import * as api from "../api-calls/api-post";
import { UserContext } from "../Contexts/UserContext";

export default function SubmitComment({ id, setComments }) {
  const [commentForSubmit, setCommentForSubmit] = useState("");
  const [error, setError] = useState(null);

  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentObj = {
      author: user.username,
      body: commentForSubmit,
      // "just now" used for optimistic rendering
      created_at: "(Just Now)",
    };
    setComments((currentComments) => {
      return [commentObj, ...currentComments];
    });
    api
      .createCommentByArticleId(id, {
        body: commentForSubmit,
        username: user.username,
      })
      .catch((err) => {
        setError(err);
      });
    setCommentForSubmit("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commentInput">Insert Comment: </label>
        <input
          type="text"
          name="commentInput"
          value={commentForSubmit}
          onChange={(e) => {
            setCommentForSubmit(e.target.value);
          }}
        ></input>
      </form>
      {error && (
        <>
          <p>
            <b>Message could not be sent</b>
          </p>
          <p style={{ color: "red" }}>
            <em>{error.response.data.message}</em>
          </p>
        </>
      )}
    </>
  );
}
