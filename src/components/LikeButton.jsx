import React, { useState } from "react";
import * as api from "../api-calls/api-patch";

const LikeButton = ({ value, id }) => {
  const [likes, setLikes] = useState(value);
  const [isClicked, setIsClicked] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
    api.updateLikes(id, !isClicked).catch((err) => {
      setError(err);
      console.log(err);
    });
  };

  return (
    <>
      <button
        className={`like-button ${isClicked && "liked"}`}
        onClick={handleClick}
      >
        <span className="likes-counter">
          {!isClicked ? "Like" : "Unlike"} {`| ${likes}`}
        </span>
      </button>
      {error && <p>Error: 'Like' was not able to be sent</p>}
    </>
  );
};

export default LikeButton;
