import "./Form.css";

function Form({ children, title, name, submitText, isLoggedIn }) {
  return (
    <form className={`form ${isLoggedIn && "form_logged"}`} name={name}>
      <h1 className={`form__title ${isLoggedIn && "form__title_logged"}`}>{title}</h1>
      {children}
      <button type="submit" className={`form__submit ${isLoggedIn && "form__submit_logged"}`}>{submitText}</button>
    </form>
  );
}

export default Form;
