import "./Form.css";

function Form({ children, title, name, submitText }) {
  return (
    <form className="form" name={name}>
      <h2 className="form__title">{title}</h2>
      {children}
      <button className="form__submit">{submitText}</button>
    </form>
  );
}

export default Form;
