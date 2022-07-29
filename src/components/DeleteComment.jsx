import * as api from "../api-calls/api-delete";
import "../Styling/DeleteComment.css";

export default function DeleteComment({ commentId, setComments, comments }) {
  const handleClick = () => {
    const filtered = comments.filter((comment) => {
      return comment.comment_id !== commentId;
    });
    setComments(filtered);
    api.removeCommentById(commentId);
  };

  return <button className="deletebutton" onClick={handleClick}>Delete Comment</button>;
}
