import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [currentTopic, setCurrentTopic] = useState()
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar setCurrentTopic={setCurrentTopic}/>
        <Routes>
          <Route path="/" element={<Articles />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
