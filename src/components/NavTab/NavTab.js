import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__links">
        <li>
          <a href="#project" className="navtab__link hover-opacity">
            О проекте
          </a>
        </li>
        <li>
          <a href="#technologies" className="navtab__link hover-opacity">
            Технологии
          </a>
        </li>
        <li>
          <a href="#student" className="navtab__link hover-opacity">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
