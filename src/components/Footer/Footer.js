import "./Footer.css";

function Footer({ movies }) {
  return (
    <footer className={`footer ${movies && 'footer_type_movies'}`}>
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__line"></div>
      <div className="footer__container">
        <span className="footer__date">© 2023</span>
        <ul className="footer__links">
          <li>
            <a
              href="www.test.ru"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="www.test.ru"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
