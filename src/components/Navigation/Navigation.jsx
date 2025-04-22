import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const getLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Navigation = () => {
  return (
    <nav className={s.nav}>
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
