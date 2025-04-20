import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message = "Oops! Something went wrong..." }) => {
  return <p className={css.error}>{message}</p>;
};

export default ErrorMessage;
