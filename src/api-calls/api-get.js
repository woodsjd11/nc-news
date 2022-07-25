import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsyon.herokuapp.com/api",
});

export const fetchArticles = () => {
  return instance.get("/articles").then((response) => {
    return response.data.articles;
  });
};
