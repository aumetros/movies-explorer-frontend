import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="notfound">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__subtitle">Страница не найдена</p>
      <span className="notfound__back" onClick={() => navigate(-1)}>
        Назад
      </span>
    </section>
  );
}

export default NotFound;
