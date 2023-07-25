import "./Navigation.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

function Navigation({ isMain }) {
  const [isMobMenuClicked, setIsMobMenuClicked] = React.useState(false);

  function handleMobMenuClick() {
    setIsMobMenuClicked(!isMobMenuClicked);
  }

  function handleNavBar() {
    if (isMain) {
      return (
        <nav className="navigation">
          <Link
            to="/signup"
            className="navigation__link navigation__link_type_signup"
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="navigation__link navigation__link_type_signin"
          >
            Войти
          </Link>
        </nav>
      );
    } else {
      return (
        <nav className={`navigation ${!isMain && "navigation_type_movies"}`}>
          <ul className="navigation__links">
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `navigation__link link navigation__link_type_movies ${
                    isActive ? "navigation__link_type_active" : ""
                  }`
                }
              >
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  `navigation__link link navigation__link_type_movies ${
                    isActive ? "navigation__link_type_active" : ""
                  }`
                }
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <div className="navigation__profile">
            <NavLink
              to="/profile"
              className="navigation__link navigation__link_type_profile"
            >
              Аккаунт
            </NavLink>
            <div className="navigation__profile-icon"></div>
          </div>
          <div
            className="navigation__mob-menu-icon"
            onClick={handleMobMenuClick}
          ></div>
          {isMobMenuClicked && <MobileMenu onClose={handleMobMenuClick} />}
        </nav>
      );
    }
  }
  return handleNavBar();
}

export default Navigation;
