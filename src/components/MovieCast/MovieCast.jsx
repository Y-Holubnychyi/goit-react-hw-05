import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../api/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import DEFAULT_IMG from "../../api/defImg";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const results = await fetchMovieCredits(movieId);
        setCast(results);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div className={css.castBlock}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={css.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : DEFAULT_IMG
                }
                alt={name}
                width="100"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No cast information available.</p>
      )}
    </div>
  );
};

export default MovieCast;
