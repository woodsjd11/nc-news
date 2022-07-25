export default function NavBar() {
  return (
    <nav>
      <button>All Artcles</button>
      <label htmlFor="topics">Select Topic: </label>
      <select name="topics">
        <option value="coding">Coding</option>
        <option value="football">Football</option>
        <option value="cooking">Cooking</option>
      </select>
      <label htmlFor="sortby">Sort By: </label>
      <select name="sortby">
        <option value="titleasc">Title (A-Z)</option>
        <option value="titledesc">Title (Z-A)</option>
        <option value="pubdateasc">Publication Date (old to new)</option>
        <option value="pubdatedesc">Publication Date (new to old)</option>
        <option value="votesasc">Votes (high to low)</option>
        <option value="votesdesc">Votes (low to high)</option>
      </select>
    </nav>
  );
}
