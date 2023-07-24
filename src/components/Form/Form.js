import "./Form.css";

function Form({ children, title, name, submitText, isLoggedIn }) {
  return (
    <form className={`form ${isLoggedIn && "form_logged"}`} name={name}>
      <h2 className={`form__title ${isLoggedIn && "form__title_logged"}`}>{title}</h2>
      {children}
      <button className={`form__submit ${isLoggedIn && "form__submit_logged"}`}>{submitText}</button>
    </form>
  );
}

export default Form;
