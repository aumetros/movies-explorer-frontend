import "./AboutMe.css";
import foto from "../../images/student-foto.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__line"></div>
      <div className="about-me__container">
        <div className="about-me__info">
          <div className="about-me__info-text">
            <h3 className="about-me__name">Алексей</h3>
            <p className="about-me__subtitle">Фронтенд-разработчик, 40 лет</p>
            <article className="about-me__story">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </article>
          </div>
          <ul className="about-me__links">
            <li>
              <a
                href="https://github.com/aumetros"
                className="about-me__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://t.me/aumetros"
                className="about-me__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
        <img
          className="about-me__info-foto"
          alt="Фотография Алексея"
          src={foto}
        />
      </div>
    </section>
  );
}

export default AboutMe;
