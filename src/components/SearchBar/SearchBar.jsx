import { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa"; // Імпортуємо іконку пошуку
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value.trim());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert("Please enter a search term!"); // Сповіщення, якщо поле пошуку порожнє
      return;
    }
    onSubmit(query);
    setQuery(""); // очищаємо поле після пошуку
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
        <FaSearch /> {/* Іконка пошуку */}
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
