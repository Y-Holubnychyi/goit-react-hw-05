import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../api/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SearchBar from "../../components/SearchBar/SearchBar";
import { toast } from "react-hot-toast"; // Імпортуємо бібліотеку для сповіщень

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const results = await searchMovies(query);
        setMovies(results);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const handleSubmit = (value) => {
    if (!value.trim()) {
      toast.error("Please enter a search term!"); // Сповіщення про порожнє поле
      return;
    }
    setSearchParams({ query: value });
  };

  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default MoviesPage;
