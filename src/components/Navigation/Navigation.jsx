import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={getLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
