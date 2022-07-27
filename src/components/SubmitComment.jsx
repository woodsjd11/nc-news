import { useState } from "react";
//required for api call
import * as api from "../api-calls/api-post";

export default function SubmitComment({ id }) {
  const [commentForSubmit, setCommentForSubmit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // add api call here
    setCommentForSubmit("");
  };

  return (
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
  );
}
