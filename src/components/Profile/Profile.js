import Form from "../Form/Form";
import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <Header />
      <Form title="Привет, Алексей!" name="profile" submitText="Редактировать" isLoggedIn={true}>
        <div className="profile__input-container">
          <label className="profile__input-label" htmlFor="name">
            Имя
          </label>
          <input
            className="profile__input"
            type="text"
            name="name"
            id="name"
            placeholder="Введите своё имя"
            value={"Алексей"}
          />
        </div>
        <div className="profile__line"></div>
        <div className="profile__input-container">
          <label className="profile__input-label" htmlFor="email">
            E-mail
          </label>
          <input
            type="text"
            className="profile__input"
            name="email"
            id="email"
            placeholder="Введите email"
            value={"pochta@yandex.ru"}
          />
        </div>
      </Form>
      <button className="profile__logout-btn">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
