export default function SortBy({ setSortBy }) {
  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="sortby">
      <label htmlFor="sortby">Sort By: </label>
      <select name="sortby" onChange={handleChange}>
        <option value="title&order=asc">Title (A-Z)</option>
        <option value="title&order=desc">Title (Z-A)</option>
        <option value="created_at&order=asc">
          Publication Date (old to new)
        </option>
        <option value="created_at&order=desc">
          Publication Date (new to old)
        </option>
        <option value="votes&order=desc">Votes (high to low)</option>
        <option value="votes&order=asc">Votes (low to high)</option>
      </select>
    </div>
  );
}
