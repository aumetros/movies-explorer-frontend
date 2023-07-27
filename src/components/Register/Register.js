import "./Register.css";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/UseForm";

function Register() {
  const { values, handleChange } = useForm();

  function handleRegister(event) {
    event.preventDefault();
    console.log(values.registerName);
    console.log(values.registerEmail);
    console.log(values.registerPassword);
    event.target.reset();
  }

  return (
    <main className="register">
      <Link to="/" className="register__logo-link">
        <div className="register__logo"></div>
      </Link>
      <Form
        title="Добро пожаловать!"
        name="register"
        submitText="Зарегистрироваться"
        onSubmit={handleRegister}
      >
        <label className="register__input-label" htmlFor="registerName">
          Имя
        </label>
        <input
          className="register__input"
          type="text"
          name="registerName"
          id="registerName"
          placeholder="Введите своё имя"
          value={values.name}
          onChange={handleChange}
        />
        <span className="register__error"></span>

        <label className="register__input-label" htmlFor="registerEmail">
          E-mail
        </label>
        <input
          className="register__input"
          type="email"
          name="registerEmail"
          id="registerEmail"
          placeholder="Введите email"
          value={values.name}
          onChange={handleChange}
        />
        <span className="register__error"></span>

        <label className="register__input-label" htmlFor="registerPassword">
          Пароль
        </label>
        <input
          className="register__input register__input_invalid"
          type="password"
          name="registerPassword"
          id="registerPassword"
          placeholder="Введите пароль"
          value={values.name}
          onChange={handleChange}
        />
        <span className="register__error">Что-то пошло не так...</span>
      </Form>

      <div className="register__link-container">
        <span className="register__allready-text">Уже зарегистрированы?</span>
        <Link to="/signin" className="register__link">
          Войти
        </Link>
      </div>
    </main>
  );
}

export default Register;
