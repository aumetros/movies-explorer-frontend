import "./Login.css";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/UseForm";

function Login() {
  const { values, handleChange } = useForm();

  function handleLogin(event) {
    event.preventDefault();
    console.log(values.loginEmail);
    console.log(values.loginPassword);
    event.target.reset();
  }

  return (
    <main className="login">
      <Link to="/" className="login__logo-link">
        <div className="login__logo"></div>
      </Link>
      <Form
        title="Рады видеть!"
        name="login"
        submitText="Войти"
        onSubmit={handleLogin}
      >
        <label className="login__input-label" htmlFor="loginEmail">
          E-mail
        </label>
        <input
          className="login__input"
          type="email"
          name="loginEmail"
          id="loginEmail"
          placeholder="Введите почту"
          value={values.name}
          onChange={handleChange}
        />
        <span className="login__error"></span>

        <label className="login__input-label" htmlFor="loginPassword">
          Пароль
        </label>
        <input
          className="login__input"
          type="password"
          name="loginPassword"
          id="loginPassword"
          placeholder="Введите пароль"
          value={values.name}
          onChange={handleChange}
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
