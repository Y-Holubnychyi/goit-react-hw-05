import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, title, name }) => (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`} state={location}>
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
