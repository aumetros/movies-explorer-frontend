import Form from "../Form/Form";
import Header from "../Header/Header";
import "./Profile.css";
import { useForm } from "../../hooks/UseForm";

function Profile() {
  const { values, handleChange } = useForm();

  function handleProfileEdit(event) {
    event.preventDefault();
    console.log(values.editName);
    console.log(values.editEmail);
    event.target.reset();
  }

  return (
    <section className="profile">
      <Header />
      <main>
        <Form
          title="Привет, Алексей!"
          name="profile"
          submitText="Редактировать"
          isLoggedIn={true}
          onSubmit={handleProfileEdit}
        >
          <div className="profile__input-container">
            <label className="profile__input-label" htmlFor="editName">
              Имя
            </label>
            <input
              className="profile__input"
              type="text"
              name="editName"
              id="editName"
              placeholder="Введите своё имя"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="profile__line"></div>
          <div className="profile__input-container">
            <label className="profile__input-label" htmlFor="editEmail">
              E-mail
            </label>
            <input
              type="text"
              className="profile__input"
              name="editEmail"
              id="editEmail"
              placeholder="Введите email"
              value={values.name}
              onChange={handleChange}
            />
          </div>
        </Form>
        <button className="profile__logout-btn">Выйти из аккаунта</button>
      </main>
    </section>
  );
}

export default Profile;
