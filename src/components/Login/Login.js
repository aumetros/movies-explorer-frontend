import "./Login.css";
import Form from "../Form/Form";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="login">
      <Link to="/" className="login__logo-link">
        <div className="login__logo"></div>
      </Link>
      <Form title="Рады видеть!" name="login" submitText="Войти">
        <label className="login__input-label" htmlFor="email">
          E-mail
        </label>
        <input
          className="login__input"
          type="email"
          name="email"
          id="email"
          defaultValue="pochta@yandex.ru"
        />
        <span className="login__error"></span>

        <label className="login__input-label" htmlFor="password">
          Пароль
        </label>
        <input
          className="login__input"
          type="password"
          name="password"
          id="password"
          defaultValue=""
        />
        <span className="login__error"></span>
      </Form>

      <div className="login__link-container">
        <span className="login__allready-text">Ещё не зарегистрированы?</span>
        <Link to="/signup" className="login__link">
          Регистрация
        </Link>
      </div>
    </main>
  );
}

export default Login;
