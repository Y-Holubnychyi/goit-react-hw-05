import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const results = await fetchMovieReviews(movieId);
        setReviews(results);
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
    <div className={css.reviewsBlock}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.item}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No reviews found.</p>
      )}
    </div>
  );
};

export default MovieReviews;
