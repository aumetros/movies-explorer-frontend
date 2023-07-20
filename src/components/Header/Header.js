import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <Navigation />
    </header>
  );
}

export default Header;