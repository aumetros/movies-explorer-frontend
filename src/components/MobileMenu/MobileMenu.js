import "./MobileMenu.css";
import { NavLink } from "react-router-dom";

function MobileMenu({ onClose }) {
  return (
    <aside className="mobile-menu">
      <div className="mobile-menu__container">
        <button className="mobile-menu__close-btn" onClick={onClose}></button>
        <ul className="mobile-menu__navigation">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `mobile-menu__link ${
                  isActive ? "mobile-menu__link_active" : ""
                }`
              }
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `mobile-menu__link ${
                  isActive ? "mobile-menu__link_active" : ""
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
                `mobile-menu__link ${
                  isActive ? "mobile-menu__link_active" : ""
                }`
              }
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <div className="mobile-menu__profile">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `mobile-menu__link mobile-menu__link_type_profile ${
                isActive ? "mobile-menu__link_active" : ""
              }`
            }
          >
            Аккаунт
          </NavLink>
          <div className="mobile-menu__profile-icon"></div>
        </div>
      </div>
    </aside>
  );
}

export default MobileMenu;
