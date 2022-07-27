import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsyon.herokuapp.com/api",
});

export const fetchArticles = (currentTopic, sortBy) => {
  return instance
    .get("/articles", {
      params: {
        topic: currentTopic,
        //sortBy string contains sortby and order queries
        sort_by: sortBy.split("&order=")[0],
        order: sortBy.split("&order=")[1],
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
