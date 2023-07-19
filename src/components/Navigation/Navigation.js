import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__link navigation__link_type_signup hover-opacity">
        Регистрация
      </Link>
      <Link className="navigation__link navigation__link_type_signin hover-opacity">
        Войти
      </Link>
    </nav>
  );
}

export default Navigation;
