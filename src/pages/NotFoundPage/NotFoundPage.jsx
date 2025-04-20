import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <main className={css.wrapper}>
      <h1>404 - Page not found</h1>
      <p>Oops! This page does not exist.</p>
      <Link to="/" className={css.link}>
        Go back to Home
      </Link>
    </main>
  );
};

export default NotFoundPage;
