import { Link } from "react-router-dom";
import SortBy from "./SortBy";

export default function NavBar({ setSortBy }) {
  const handleClick = () => {
    setSortBy("created_at&order=desc");
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
      <SortBy setSortBy={setSortBy} />
    </nav>
  );
}
