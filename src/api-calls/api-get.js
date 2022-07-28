import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsyon.herokuapp.com/api",
});

export const fetchArticles = (topic, sortBy, order) => {
  return instance
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sortBy,
        order: order,
      },
    })
    .then((response) => {
      return response.data.articles;
    });
};

export const fetchArticlebyId = (id) => {
  return instance.get(`/articles/${id}`).then((response) => {
    return response.data.article;
  });
};

export const fetchCommentsByArticleId = (id) => {
  return instance.get(`/articles/${id}/comments`).then((response) => {
    return response.data.comments;
  });
};
