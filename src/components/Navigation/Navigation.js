import "./Navigation.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

function Navigation({ isMain, loggedIn }) {
  const [isMobMenuClicked, setIsMobMenuClicked] = React.useState(false);

  function handleMobMenuClick() {
    setIsMobMenuClicked(!isMobMenuClicked);
  }

  function handleNavBar() {
    if (isMain && loggedIn) {
      return (
        <nav className="navigation">
          <div className="navigation__links-container">
            <Link
              to="/movies"
              className="navigation__link navigation__link_type_main"
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className="navigation__link navigation__link_type_main"
            >
              Сохранённые фильмы
            </Link>
          </div>
          <Link
            to="/profile"
            className="navigation__link navigation__link_type_main-profile"
          >
            <div className="navigation__profile-icon-main"></div>
            Аккаунт
          </Link>
          <button
            className="navigation__mob-menu-icon navigation__mob-menu-icon_type_main"
            type="button"
            onClick={handleMobMenuClick}
          ></button>
          <MobileMenu isOpen={isMobMenuClicked} onClose={handleMobMenuClick} />
        </nav>
      );
    } else if (isMain) {
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
              <span>Аккаунт</span>
              <div className="navigation__profile-icon"></div>
            </NavLink>
          </div>
          <button
            className="navigation__mob-menu-icon"
            type="button"
            onClick={handleMobMenuClick}
          ></button>
          <MobileMenu isOpen={isMobMenuClicked} onClose={handleMobMenuClick} />
        </nav>
      );
    }
  }
  return handleNavBar();
}

export default Navigation;
