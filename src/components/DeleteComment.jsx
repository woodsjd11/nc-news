import * as api from "../api-calls/api-delete";

export default function DeleteComment({ commentId, setComments, comments }) {
  const handleClick = () => {
    const filtered = comments.filter((comment) => {
      return comment.comment_id !== commentId;
    });
    setComments(filtered);
    api.removeCommentById(commentId);
  };

  return <button onClick={handleClick}>Delete Comment</button>;
}
