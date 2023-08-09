import "./Register.css";
import React from "react";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/UseForm";
import { useValidation } from "../../hooks/useValidation";
import { useFormErrors } from "../../hooks/useFormErrors";

function Register({ onSubmit }) {
  const { values, handleChange, setValues } = useForm();
  const { errors, setErrors } = useFormErrors();

  const registerNameResult = useValidation(values.registerName, "registerName");
  const registerEmailResult = useValidation(
    values.registerEmail,
    "registerEmail"
  );
  const registerPasswordResult = useValidation(
    values.registerPassword,
    "registerPassword"
  );

  const isRegisterNameInvalid = Object.values(errors.registerName).some(
    Boolean
  );
  const isRegisterEmailInvalid = Object.values(errors.registerEmail).some(
    Boolean
  );
  const isRegisterPasswordInvalid = Object.values(errors.registerPassword).some(
    Boolean
  );

  const isFormInvalid =
    isRegisterNameInvalid ||
    isRegisterEmailInvalid ||
    isRegisterPasswordInvalid;

  const [visibilityValidate, setVisibilityValidate] = React.useState({
    registerName: false,
    registerEmail: false,
    registerPassword: false,
  });

  const registerNameClassName = `register__input ${
    visibilityValidate.registerName &&
    isRegisterNameInvalid &&
    "register__input_invalid"
  }`;

  const registerEmailClassName = `register__input ${
    visibilityValidate.registerEmail &&
    isRegisterEmailInvalid &&
    "register__input_invalid"
  }`;

  const registerPasswordClassName = `register__input ${
    visibilityValidate.registerPassword &&
    isRegisterPasswordInvalid &&
    "register__input_invalid"
  }`;

  function handleFocusInput(event) {
    setVisibilityValidate({ ...visibilityValidate, [event.target.name]: true });
  }

  React.useEffect(() => {
    setErrors({
      registerName: registerNameResult,
      registerEmail: registerEmailResult,
      registerPassword: registerPasswordResult,
    });
  }, [
    registerNameResult,
    registerEmailResult,
    registerPasswordResult,
    setErrors,
  ]);

  React.useEffect(() => {
    setValues({
      registerName: "",
      registerEmail: "",
      registerPassword: "",
    });
  }, [setValues]);

  function showRegisterNameErrors() {
    if (visibilityValidate.registerName) {
      return (
        <>
          {errors.registerName.required &&
            errors.registerName.minLenght &&
            "Заполните это поле."}
          {!errors.registerName.required &&
            errors.registerName.minLenght &&
            !errors.registerName.validity &&
            "В имени должно быть больше 2 символов."}
          {!errors.registerName.required &&
            errors.registerName.minLenght &&
            errors.registerName.validity &&
            "Имя содержит недопустимые символы."}
          {!errors.registerName.required &&
            !errors.registerName.minLenght &&
            errors.registerName.validity &&
            !errors.registerName.maxLength &&
            "Имя содержит недопустимые символы."}
          {!errors.registerName.required &&
            !errors.registerName.minLenght &&
            errors.registerName.validity &&
            errors.registerName.maxLength &&
            "Имя содержит недопустимые символы."}
          {errors.registerName.maxLength &&
            !errors.registerName.validity &&
            "В имени не должно быть больше 30 символов."}
        </>
      );
    }
  }

  function showRegisterEmailErrors() {
    if (visibilityValidate.registerEmail) {
      return (
        <>
          {errors.registerEmail.required &&
            errors.registerEmail.email &&
            "Заполните это поле."}
          {!errors.registerEmail.required &&
            errors.registerEmail.email &&
            "Это не похоже на email."}
        </>
      );
    }
  }

  function showRegisterPasswordErrors() {
    if (visibilityValidate.registerPassword) {
      return <>{errors.registerPassword.required && "Заполните это поле."}</>;
    }
  }

  function handleRegister(event) {
    event.preventDefault();
    // onSubmit(values.registerEmail, values.registerPassword, values.registerName)
    event.target.reset();
    setVisibilityValidate({
      registerName: false,
      registerEmail: false,
      registerPassword: false,
    });
    setValues({
      registerName: "",
      registerEmail: "",
      registerPassword: "",
    });
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
        isFormInvalid={isFormInvalid}
      >
        <label className="register__input-label" htmlFor="registerName">
          Имя
        </label>
        <input
          className={registerNameClassName}
          type="text"
          name="registerName"
          id="registerName"
          placeholder="Введите своё имя"
          value={values.name}
          onChange={handleChange}
          onFocus={handleFocusInput}
        />
        <span className="register__error">{showRegisterNameErrors()}</span>

        <label className="register__input-label" htmlFor="registerEmail">
          E-mail
        </label>
        <input
          className={registerEmailClassName}
          type="email"
          name="registerEmail"
          id="registerEmail"
          placeholder="Введите email"
          value={values.name}
          onChange={handleChange}
          onFocus={handleFocusInput}
        />
        <span className="register__error">{showRegisterEmailErrors()}</span>

        <label className="register__input-label" htmlFor="registerPassword">
          Пароль
        </label>
        <input
          className={registerPasswordClassName}
          type="password"
          name="registerPassword"
          id="registerPassword"
          placeholder="Введите пароль"
          value={values.name}
          onChange={handleChange}
          onFocus={handleFocusInput}
        />
        <span className="register__error">{showRegisterPasswordErrors()}</span>
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
