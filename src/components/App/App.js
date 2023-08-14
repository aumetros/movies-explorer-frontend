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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Modal from "../Modal/Modal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");
  const [userMovies, setUserMovies] = React.useState([]);
  const [isServerResponse, setIsServerResponse] = React.useState(true);

  const navigate = useNavigate();

  function handleOpenModal(msg) {
    setModalMessage(msg);
    setIsOpenModal(!isOpenModal);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  function handleRegisterSubmit(email, password, name) {
    mainApi
      .register(email, password, name)
      .then((res) => {
        if (res._id) {
          handleLoginSubmit(email, password);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        err === 409
          ? handleOpenModal("Пользователь с таким email уже существует.")
          : handleOpenModal("Что-то пошло не так. Попробуйте зарегистрироваться позже.");
      });
  }

  function handleLoginSubmit(email, password) {
    mainApi
      .login(email, password)
      .then((res) => {
        if (res._id) {
          setIsLoggedIn(true);
          setCurrentUser(res);
          localStorage.setItem("user", res._id);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        err === 401
          ? handleOpenModal("Неправильные email или пароль.")
          : handleOpenModal("Что-то пошло не так. Попробуйте войти позже.");
      });
  }

  function handleEditProfile(email, name) {
    mainApi
      .editProfile(email, name)
      .then((res) => {
        if (res.data) {
          setCurrentUser(res.data);
          handleOpenModal("Данные успешно обновлены.");
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        err === 409
          ? handleOpenModal("Пользователь с таким email уже существует.")
          : console.log(`Ошибка: ${err}`);
      });
  }

  function handleLogoutUser() {
    mainApi
      .logoutUser()
      .then((res) => {
        if (res.message) {
          console.log(res.message);
          localStorage.removeItem("user");
          localStorage.removeItem("request");
          localStorage.removeItem("shorts");
          localStorage.removeItem("movies");
          setIsLoggedIn(false);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleSaveMovie(movie) {
    mainApi
      .saveMovies(movie)
      .then((res) => {
        if (res.data) {
          setUserMovies([res.data, ...userMovies]);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleDeleteMovie(movieId) {
    mainApi
      .deleteSavedMovie(movieId)
      .then((res) => {
        if (res.data) {
          setUserMovies((movies) =>
            movies.filter((m) => m._id !== res.data._id)
          );
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleFilter(arr, request) {
    const result = arr.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(request.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(request.toLowerCase())
      );
    });
    return result;
  }

  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      mainApi
        .checkToken()
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            setCurrentUser(res.data);
          }
        })
        .catch((err) => {
          localStorage.removeItem("user");
          console.log(`Ошибка: ${err}`);
        });
    }
  }, []);

  React.useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserMovies()
        .then((res) => {
          if (res.data) {
            setUserMovies(res.data);
            setIsServerResponse(true);
          }
        })
        .catch((err) => {
          setIsServerResponse(false);
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<Main loggedIn={isLoggedIn} />} />
            <Route
              path="/signup"
              element={
                <Register
                  onSubmit={handleRegisterSubmit}
                  loggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login onSubmit={handleLoginSubmit} loggedIn={isLoggedIn} />
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  loggedIn={isLoggedIn}
                  element={Movies}
                  onOpenModal={handleOpenModal}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                  userMovies={userMovies}
                  onFilter={handleFilter}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  loggedIn={isLoggedIn}
                  element={SavedMovies}
                  onOpenModal={handleOpenModal}
                  userMovies={userMovies}
                  onServerResponse={isServerResponse}
                  onDeleteMovie={handleDeleteMovie}
                  onFilter={handleFilter}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  loggedIn={isLoggedIn}
                  element={Profile}
                  onSubmit={handleEditProfile}
                  onLogout={handleLogoutUser}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Modal
          isOpen={isOpenModal}
          onClose={handleCloseModal}
          modalMessage={modalMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
