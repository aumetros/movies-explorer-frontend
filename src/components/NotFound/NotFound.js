import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__subtitle">Страница не найдена</p>
      <button type="button" className="notfound__back" onClick={() => navigate(-1)}>
        Назад
      </button>
    </main>
  );
}

export default NotFound;
