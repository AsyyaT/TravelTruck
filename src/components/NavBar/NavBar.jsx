import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import css from "./NavBar.module.css";
import Logo from "../Logo/Logo.jsx";

const NavBar = () => {
  return (
    <header className={css.header}>
      <div></div>
      <Link to="/">
        <Logo />
      </Link>
      <Navigation />
    </header>
  );
};

export default NavBar;
