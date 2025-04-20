import { useState } from "react";
import PropTypes from "prop-types";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value.trimStart());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    onSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleChange}
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
