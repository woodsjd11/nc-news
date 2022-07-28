import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Articles from "./components/ArticlesList";
import Article from "./components/Article";
import { UserContext } from "./Contexts/UserContext";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 const [user, setUser] = useState({
    username: "weegembump",
    name: "Gemma Bump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
  });
  const [currentTopic, setCurrentTopic] = useState();

  return (
    <BrowserRouter>
     <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Articles />}></Route>
          <Route path="/articles/:topic" element={<Articles />}></Route>
          <Route path="/article/:article_id" element={<Article />}></Route>
        </Routes>
      </div>
     </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
