import Form from "../Form/Form";
import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <Header />
      <Form title="Привет, Алексей!" name="profile" submitText="Редактировать">
        <div className="profile__input-container">
          <label className="profile__input-label" htmlFor="name">Имя</label>
          <input className="profile__input" name="name" id="name" value={'Алексей'}/>
        </div>
        <div className="profile__line"></div>
        <div className="profile__input-container">
          <label className="profile__input-label" htmlFor="email">E-mail</label>
          <input className="profile__input" name="email" id="email" value={'pochta@yandex.ru'}/>
        </div>        
      </Form>
      <button className="profile__logout-btn">Выйти из аккаунта</button>
    </section>
  )

}

export default Profile;