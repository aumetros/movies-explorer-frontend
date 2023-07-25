import "./Register.css";
import Form from "../Form/Form";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <Link to="/" className="register__logo-link">
        <div className="register__logo"></div>
      </Link>
      <Form
        title="Добро пожаловать!"
        name="register"
        submitText="Зарегистрироваться"
      >
        <label className="register__input-label" htmlFor="name">
          Имя
        </label>
        <input
          className="register__input"
          type="text"
          name="name"
          id="name"
          value={"Алексей"}
        />
        <span className="register__error"></span>

        <label className="register__input-label" htmlFor="email">
          E-mail
        </label>
        <input
          className="register__input"
          type="email"
          name="email"
          id="email"
          value={"pochta@yandex.ru"}
        />
        <span className="register__error"></span>

        <label className="register__input-label" htmlFor="password">
          Пароль
        </label>
        <input
          className="register__input register__input_invalid"
          type="password"
          name="password"
          id="password"
          value={"Алексей"}
        />
        <span className="register__error">Что-то пошло не так...</span>
      </Form>

      <div className="register__link-container">
        <span className="register__allready-text">Уже зарегистрированы?</span>
        <Link to="/signin" className="register__link">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
