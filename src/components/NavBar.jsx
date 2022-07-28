import "../Styling/NavBar.css"
import { Link } from "react-router-dom";
import SortBy from "./SortBy";
import { useState } from "react";

export default function NavBar() {
  const [sortArticlesBy, setSortArticlesBy] = useState();

  const handleClick = () => {
    setSortArticlesBy("created_at&order=desc");
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={handleClick}>
        All Articles
      </Link>
      <div className="dropdown">
        <button className="dropbtn" tabIndex="0">
          Select Topic
        </button>
        <div className="dropdown-content">
          <Link to="/articles/coding" onClick={handleClick}>
            Coding
          </Link>
          <Link to="/articles/cooking" onClick={handleClick}>
            Cooking
          </Link>
          <Link to="/articles/football" onClick={handleClick}>
            Football
          </Link>
        </div>
      </div>
      <SortBy
        setSortArticlesBy={setSortArticlesBy}
        sortArticlesBy={sortArticlesBy}
      />
    </nav>
  );
}
