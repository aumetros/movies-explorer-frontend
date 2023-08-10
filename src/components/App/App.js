import "./App.css";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import * as mainApi from "../../utils/MainApi";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const navigate = useNavigate();

  const handleCheckToken = React.useCallback(() => {
    if (localStorage.getItem("user")) {
      mainApi
        .checkToken()
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate("/movies", { replace: true });
          }
        })
        .catch((err) => {
          localStorage.removeItem("user");
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [navigate]);

  React.useEffect(() => {
    handleCheckToken();
  }, [handleCheckToken]);

  function handleRegisterSubmit(email, password, name) {
    mainApi
      .register(email, password, name)
      .then((res) => {
        if (res._id) {
          setIsLoggedIn(true);
          localStorage.setItem("user", res._id);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleLoginSubmit(email, password) {
    mainApi
      .login(email, password)
      .then((res) => {
        if (res._id) {
          setIsLoggedIn(true);
          localStorage.setItem("user", res._id);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Main loggedIn={isLoggedIn} />} />
          <Route
            path="/signup"
            element={<Register onSubmit={handleRegisterSubmit} />}
          />
          <Route
            path="/signin"
            element={<Login onSubmit={handleLoginSubmit} />}
          />
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement loggedIn={isLoggedIn} element={Movies} />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                loggedIn={isLoggedIn}
                element={SavedMovies}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement loggedIn={isLoggedIn} element={Profile} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
