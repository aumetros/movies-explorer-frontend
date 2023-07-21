import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a
        href="https://t.me/aumetros"
        className="portfolio__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="portfolio__text">Статичный сайт</span>
        <span className="portfolio__icon">↗</span>
      </a>
      <div className="portfolio__line"></div>
      <a
        href="https://t.me/aumetros"
        className="portfolio__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="portfolio__text">Адаптивный сайт</span>
        <span className="portfolio__icon">↗</span>
      </a>
      <div className="portfolio__line"></div>
      <a
        href="https://t.me/aumetros"
        className="portfolio__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="portfolio__text">Одностраничное приложение</span>
        <span className="portfolio__icon">↗</span>
      </a>
    </section>
  );
}

export default Portfolio;
