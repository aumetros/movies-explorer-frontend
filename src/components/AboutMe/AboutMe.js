import "./AboutMe.css";
import foto from "../../images/student-foto.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__line"></div>
      <div className="about-me__container">
        <div className="about-me__info">
          <div className="about-me__info-text">
            <h3 className="about-me__name">Алексей</h3>
            <p className="about-me__subtitle">Фронтенд-разработчик, 40 лет</p>
            <p className="about-me__story">
              Я родился в городе Караганда. Учился в Тверском Государственном
              Техническом Универсистете по специальности инженер-программист, в
              этом же городе и остался жить. Я активно развиваюсь по направлению
              frontend-разработка, так как мне нравится идея создания продукта,
              который может сделать жизнь людей проще и интереснее. Мне
              интересно решать сложные инженерные задачи. Я увлекаюсь
              коллекционированием винила. В моей коллекции уже более 200
              пластинок. Музыка, путешествия и спорт наполняют мою жизнь
              эмоциями, с которыми мне всегда хочется возвращаться на работу и
              создавать что-то полезное и прекрасное.
            </p>
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
