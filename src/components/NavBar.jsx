import { Link } from "react-router-dom";

export default function NavBar({ setCurrentTopic }) {
  return (
    <nav className="navbar">
      <Link to="/">All Articles</Link>
      <div className="dropdown">
        <button className="dropbtn" tabIndex="0">
          Select Topic
        </button>
        <div className="dropdown-content">
          <Link to="/articles/coding">Coding</Link>
          <Link to="/articles/cooking">Cooking</Link>
          <Link to="/articles/football">Football</Link>
        </div>
      </div>
      <div className="sortby">
      <label htmlFor="sortby">Sort By: </label>
        <select name="sortby">
          <option value="titleasc">Title (A-Z)</option>
          <option value="titledesc">Title (Z-A)</option>
          <option value="pubdateasc">Publication Date (old to new)</option>
          <option value="pubdatedesc">Publication Date (new to old)</option>
          <option value="votesasc">Votes (high to low)</option>
          <option value="votesdesc">Votes (low to high)</option>
        </select>
      </div>
    </nav>
  );
}
