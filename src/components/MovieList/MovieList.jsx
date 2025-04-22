import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { MdMovie } from "react-icons/md";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map(({ id, title, name, poster_path }) => (
        <li key={id} className={s.item}>
          <Link to={`/movies/${id}`} state={location} className={s.link}>
            <div className={s.imageWrapper}>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title || name}
                  className={s.image}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              ) : (
                <div className={s.iconContainer}>
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
