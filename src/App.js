import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Articles from "./components/ArticlesList";
import Article from "./components/Article";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Articles />}></Route>
          <Route path="/articles/:topic" element={<Articles />}></Route>
          <Route path="/article/:article_id" element={<Article />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
