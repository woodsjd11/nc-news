import { Link } from "react-router-dom";
import SortBy from "./SortBy";

export default function NavBar() {
 

  return (
    <nav className="navbar">
      <Link to="/" >
        All Articles
      </Link>
      <div className="dropdown">
        <button className="dropbtn" tabIndex="0">
          Select Topic
        </button>
        <div className="dropdown-content">
          <Link to="/articles/coding" >
            Coding
          </Link>
          <Link to="/articles/cooking" >
            Cooking
          </Link>
          <Link to="/articles/football" >
            Football
          </Link>
        </div>
      </div>
      <SortBy />
    </nav>
  );
}
