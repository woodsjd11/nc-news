import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsyon.herokuapp.com/api",
});

export const createCommentByArticleId = (id, comment) => {
    console.log(comment)
  return instance.post(`/articles/${id}/comments`, comment);
};
