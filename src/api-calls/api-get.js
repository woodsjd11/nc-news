import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsyon.herokuapp.com/api",
});

export const fetchArticles = (currentTopic) => {
  return instance
    .get("/articles", { params: { topic: currentTopic } })
    .then((response) => {
      return response.data.articles;
    });
};

export const fetchArticlebyId = (id) => {
  return instance.get(`/articles/${id}`).then((response) => {
    return response.data.article;
  });
};
