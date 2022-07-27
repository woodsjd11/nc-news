import { useState, useContext } from "react";
import * as api from "../api-calls/api-post";
import { UserContext } from "../Contexts/UserContext";

export default function SubmitComment({ id, comments, setComments }) {
  const [commentForSubmit, setCommentForSubmit] = useState("");
  const [error, setError] = useState(null);

  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .createCommentByArticleId(id, {
        body: commentForSubmit,
        username: user.username,
      })
      .then((response) => {
        console.log(response);
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
      {error && <p>{error.response.data.message}</p>}
    </>
  );
}
