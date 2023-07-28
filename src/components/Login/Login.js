import "./Login.css";
import React from "react";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/UseForm";
import { useValidation } from "../../hooks/useValidation";
import { useFormErrors } from "../../hooks/useFormErrors";

function Login() {
  const { values, handleChange, setValues } = useForm();
  const { errors, setErrors } = useFormErrors();

  const loginEmailResult = useValidation(values.loginEmail, "loginEmail");
  const loginPasswordResult = useValidation(
    values.loginPassword,
    "loginPassword"
  );

  const isLoginEmailInvalid = Object.values(errors.loginEmail).some(Boolean);
  const isLoginPasswordInvalid = Object.values(errors.loginPassword).some(
    Boolean
  );
  const isFormInvalid = isLoginEmailInvalid || isLoginPasswordInvalid;

  const [visibilityValidate, setVisibilityValidate] = React.useState({
    loginEmail: false,
    loginPassword: false,
  });

  const loginEmailClassName = `login__input ${
    visibilityValidate.loginEmail &&
    isLoginEmailInvalid &&
    "login__input_invalid"
  }`;

  const loginPasswordClassName = `login__input ${
    visibilityValidate.loginPassword &&
    isLoginPasswordInvalid &&
    "login__input_invalid"
  }`;

  function handleFocusInput(event) {
    setVisibilityValidate({ ...visibilityValidate, [event.target.name]: true });
  }

  React.useEffect(() => {
    setErrors({
      loginEmail: loginEmailResult,
      loginPassword: loginPasswordResult,
    });
  }, [loginEmailResult, loginPasswordResult, setErrors]);

  function showLoginEmailErrors() {
    if (visibilityValidate.loginEmail) {
      return (
        <>
          {errors.loginEmail.required &&
            errors.loginEmail.email &&
            "Заполните это поле."}
          {!errors.loginEmail.required &&
            errors.loginEmail.email &&
            "Это не похоже на email."}
        </>
      );
    }
  }

  function showLoginPasswordErrors() {
    if (visibilityValidate.loginPassword) {
      return <>{errors.loginPassword.required && "Заполните это поле."}</>;
    }
  }

  function handleLogin(event) {
    event.preventDefault();
    console.log(values.loginEmail);
    console.log(values.loginPassword);
    event.target.reset();
  }

  React.useEffect(() => {
    setValues({
      loginEmail: "",
      loginPassword: "",
    });
  }, [setValues]);

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
        isFormInvalid={isFormInvalid}
      >
        <label className="login__input-label" htmlFor="loginEmail">
          E-mail
        </label>
        <input
          className={loginEmailClassName}
          type="email"
          name="loginEmail"
          id="loginEmail"
          placeholder="Введите почту"
          value={values.name}
          onChange={handleChange}
          onFocus={handleFocusInput}
        />
        <span className="login__error">{showLoginEmailErrors()}</span>

        <label className="login__input-label" htmlFor="loginPassword">
          Пароль
        </label>
        <input
          className={loginPasswordClassName}
          type="password"
          name="loginPassword"
          id="loginPassword"
          placeholder="Введите пароль"
          value={values.name}
          onChange={handleChange}
          onFocus={handleFocusInput}
        />
        <span className="login__error">{showLoginPasswordErrors()}</span>
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
