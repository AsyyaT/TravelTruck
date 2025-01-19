import Navigation from "../Navigation/Navigation.jsx";
import css from "./NavBar.module.css";
import Logo from "../Logo/Logo.jsx";

const NavBar = () => {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default NavBar;
