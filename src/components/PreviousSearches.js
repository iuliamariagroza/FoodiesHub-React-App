import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function PreviousSearches({ handleSubmit, handleSearchChange }) {
  const [searches, setSearches] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const savedSearches = JSON.parse(localStorage.getItem("searches")).slice(
      0,
      5
    );
    setSearches(savedSearches);
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    handleSearchChange(e);
  };

  const handleSearchSubmit = () => {
    if (searchInput.trim() !== "") {
      const newSearches = [...searches, searchInput.trim()];
      localStorage.setItem("searches", JSON.stringify(newSearches));
      setSearches(newSearches);
      setSearchInput("");
      handleSubmit();
    }
  };

  return (
    <div className="previous-searches section">
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search ..."
          value={searchInput}
          onChange={handleSearchInputChange}
          onSubmit={handleSearchSubmit}
        />
        <button className="btn" onClick={handleSearchSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
