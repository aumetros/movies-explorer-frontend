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
  const [modalMessage, setModalMessage] = React.useState('');
  const [isServerResponse, setIsServerResponse] = React.useState(true);

  function handleGetMovies() {
    setIsLoading(true);
    getMovies()
      .then((movies) => {
        setMovies(movies);
        setIsServerResponse(true);
      })
      .catch((err) => {
        console.log(err);
        setIsServerResponse(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
                onGetMovies={handleGetMovies}
                movies={movies}
                onError={handleOpenModal}
                onErrorServer={isServerResponse}
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
      <Modal isOpen={isOpenModal} onClose={handleCloseModal} modalMessage={modalMessage}/>
    </div>
  );
}

export default App;
