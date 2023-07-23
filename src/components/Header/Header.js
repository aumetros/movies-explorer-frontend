import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ isMain }) {
  return (
    <header className={`header ${isMain ? "header_theme_dark" : "header_theme_light"}`}>
      <div className="header__logo"></div>
      <Navigation />
    </header>
  );
}

export default Header;
