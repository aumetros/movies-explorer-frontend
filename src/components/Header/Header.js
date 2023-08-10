import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header({ isMain, loggedIn }) {
  return (
    <header
      className={`header ${
        isMain ? "header_theme_dark" : "header_theme_light"
      }`}
    >
      <Link to="/" className="header__logo-link">
        <div className="header__logo"></div>
      </Link>
      <Navigation isMain={isMain} loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
