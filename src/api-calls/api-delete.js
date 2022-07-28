import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsyon.herokuapp.com/api",
});

export const removeCommentById = (id) => {
  return instance.delete(`/comments/${id}`);
};
