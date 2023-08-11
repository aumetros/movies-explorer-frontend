import React from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useValidation } from "../../hooks/useValidation";
import { useFormErrors } from "../../hooks/useFormErrors";

function Profile({ onSubmit }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [nameValue, setNameValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [isNameDublicate, setIsNameDublicate] = React.useState(true);
  const [isEmailDublicate, setIsEmailDublicate] = React.useState(true);
  const { errors, setErrors } = useFormErrors();

  const editNameResult = useValidation(nameValue, "editName");
  const editEmailResult = useValidation(emailValue, "editEmail");

  const isEditNameInvalid = Object.values(errors.editName).some(Boolean);
  const isEditEmailInvalid = Object.values(errors.editEmail).some(Boolean);

  const isValuesDublicate = isNameDublicate || isEmailDublicate;

  const isFormInvalid =
    isEditNameInvalid || isEditEmailInvalid || isValuesDublicate;

  const [visibilityValidate, setVisibilityValidate] = React.useState({
    editName: false,
    editEmail: false,
  });

  const editNameClassName = `profile__input ${
    visibilityValidate.editName &&
    (isEditNameInvalid || isNameDublicate) &&
    "profile__input_invalid"
  }`;
  const editEmailClassName = `profile__input ${
    visibilityValidate.editEmail &&
    (isEditEmailInvalid || isEmailDublicate) &&
    "profile__input_invalid"
  }`;

  function handleFocusInput(event) {
    setVisibilityValidate({ ...visibilityValidate, [event.target.name]: true });
  }

  function handleChangeName(e) {
    setNameValue(e.target.value);
    setIsNameDublicate(e.target.value === currentUser.name);
  }

  function handleChangeEmail(e) {
    setEmailValue(e.target.value);
    setIsEmailDublicate(e.target.value === currentUser.email);
  }

  function handleShowEditNameErrors() {
    if (visibilityValidate.editName) {
      return (
        <>
          {isNameDublicate && "Такое имя у вас уже есть."}
          {errors.editName.required &&
            errors.editName.minLenght &&
            "Заполните это поле."}
          {!errors.editName.required &&
            errors.editName.minLenght &&
            !errors.editName.validity &&
            "В имени должно быть больше 2 символов."}
          {!errors.editName.required &&
            errors.editName.minLenght &&
            errors.editName.validity &&
            "Имя содержит недопустимые символы."}
          {!errors.editName.required &&
            !errors.editName.minLenght &&
            errors.editName.validity &&
            !errors.editName.maxLength &&
            "Имя содержит недопустимые символы."}
          {!errors.editName.required &&
            !errors.editName.minLenght &&
            errors.editName.validity &&
            errors.editName.maxLength &&
            "Имя содержит недопустимые символы."}
          {errors.editName.maxLength &&
            !errors.editName.validity &&
            "В имени не должно быть больше 30 символов."}
        </>
      );
    }
  }

  function handleShowEditEmailErrors() {
    if (visibilityValidate.editEmail) {
      return (
        <>
          {isEmailDublicate && "Такой email у вас уже есть."}
          {errors.editEmail.required &&
            errors.editEmail.email &&
            "Заполните это поле."}
          {!errors.editEmail.required &&
            errors.editEmail.email &&
            "Это не похоже на email."}
        </>
      );
    }
  }

  function handleProfileEdit(event) {
    event.preventDefault();
    onSubmit(emailValue, nameValue);
    setNameValue(currentUser.name);
    setEmailValue(currentUser.email);
    setIsNameDublicate(true);
    setIsEmailDublicate(true);
    setVisibilityValidate({
      editName: false,
      editEmail: false,
    });

  }

  React.useEffect(() => {
    setNameValue(currentUser.name);
    setEmailValue(currentUser.email);
  }, [currentUser]);

  React.useEffect(() => {
    setErrors({
      editName: editNameResult,
      editEmail: editEmailResult,
    });
  }, [editNameResult, editEmailResult, setErrors]);

  return (
    <section className="profile">
      <Header />
      <main>
        <Form
          title={`Привет, ${currentUser.name}!`}
          name="profile"
          submitText="Редактировать"
          isLoggedIn={true}
          onSubmit={handleProfileEdit}
          isFormInvalid={isFormInvalid}
        >
          <div className="profile__input-container">
            <label className="profile__input-label" htmlFor="editName">
              Имя
            </label>
            <input
              className={editNameClassName}
              type="text"
              name="editName"
              id="editName"
              placeholder="Введите своё имя"
              value={nameValue}
              onChange={handleChangeName}
              onFocus={handleFocusInput}
            />
          </div>
          <span className="edit__error">{handleShowEditNameErrors()}</span>
          <div className="profile__line"></div>
          <div className="profile__input-container">
            <label className="profile__input-label" htmlFor="editEmail">
              E-mail
            </label>
            <input
              type="text"
              className={editEmailClassName}
              name="editEmail"
              id="editEmail"
              placeholder="Введите email"
              value={emailValue}
              onChange={handleChangeEmail}
              onFocus={handleFocusInput}
            />
          </div>
          <span className="edit__error">{handleShowEditEmailErrors()}</span>
        </Form>
        <button className="profile__logout-btn">Выйти из аккаунта</button>
      </main>
    </section>
  );
}

export default Profile;
