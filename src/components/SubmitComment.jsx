import { useState, useContext } from "react";
import * as api from "../api-calls/api-post";
import { fetchCommentsByArticleId } from "../api-calls/api-get";
import { UserContext } from "../Contexts/UserContext";

export default function SubmitComment({ id, setComments, setIsOptimised }) {
  const [commentForSubmit, setCommentForSubmit] = useState("");
  const [error, setError] = useState(null);

  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsOptimised(true);
      setError(null);
      if (commentForSubmit.length < 11) {
        throw {
          response: {
            data: { message: "Message requires more than 10 characters" },
          },
        };
      }

      const commentObj = {
        author: user.username,
        body: commentForSubmit,
        // "just now" used for optimistic rendering
        created_at: "(Just Now)",
      };
      setComments((currentComments) => {
        return [commentObj, ...currentComments];
      });
      const response = await api.createCommentByArticleId(id, {
        body: commentForSubmit,
        username: user.username,
      });
      //update comments once api request has succeeded
      const apiComments = await fetchCommentsByArticleId(id);
      setIsOptimised(false);
      setComments(apiComments);
      setCommentForSubmit("");
    } catch (err) {
      setError(err);
    }
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
          size="50"
          height="50"
        ></input>
        <button type="submit">Submit</button>
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
