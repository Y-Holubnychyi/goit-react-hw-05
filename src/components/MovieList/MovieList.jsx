import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { MdMovie } from "react-icons/md";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, title, name, poster_path }) => (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`} state={location} className={css.link}>
            <div className={css.imageWrapper}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : ""
                }
                alt={title || name}
                className={css.image}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

              {!poster_path && (
                <div className={css.iconContainer}>
                  <MdMovie size={100} color="#ccc" />
                </div>
              )}
            </div>
            <p>{title || name}</p>
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
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
