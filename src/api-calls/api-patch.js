import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsyon.herokuapp.com/api",
});

export const updateLikes = (id, isClicked) => {
  return isClicked
    ? instance.patch(`/articles/${id}`, { inc_votes: 1 })
    : instance.patch(`/articles/${id}`, { inc_votes: -1 });
};
