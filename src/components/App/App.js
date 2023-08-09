import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import { getMovies } from "../../utils/MoviesApi";
import Modal from "../Modal/Modal";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");
  const [isServerResponse, setIsServerResponse] = React.useState(true);
  const [isMoviesFound, setIsMoviesFound] = React.useState(true);
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  function handleNotFoundMessage(result) {
    if (result.length === 0) {
      setIsMoviesFound(false);
    } else {
      setIsMoviesFound(true);
    }
  }

  function handleFilter(arr, request) {
    const result = arr.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(request.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(request.toLowerCase())
      );
    });
    setFilteredMovies(result);
    handleNotFoundMessage(result);
  }

  function handleFilterMovies(request) {
    if (movies.length === 0) {
      setIsLoading(true);
      getMovies()
        .then((movies) => {
          setMovies(movies);
          setIsServerResponse(true);
          handleFilter(movies, request);
        })
        .catch((err) => {
          console.log(err);
          setIsServerResponse(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
      console.log("Мувисов нет!");
    } else {
      handleFilter(movies, request);
      console.log("Мувисы есть!");
    }
  }

  function handleOpenModal(msg) {
    setModalMessage(msg);
    setIsOpenModal(!isOpenModal);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <Movies
                isLoading={isLoading}
                movies={filteredMovies}
                onError={handleOpenModal}
                onErrorServer={isServerResponse}
                onNotFound={isMoviesFound}
                onSearch={handleFilterMovies}
              />
            }
          />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
        modalMessage={modalMessage}
      />
    </div>
  );
}

export default App;
