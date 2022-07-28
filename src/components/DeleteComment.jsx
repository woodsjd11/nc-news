import * as api from "../api-calls/api-delete";

export default function DeleteComment({commentId}) {
  const handleClick = () => {
    api.removeCommentById(commentId)
  };

  return <button onClick={handleClick}>Delete Comment</button>;
}
