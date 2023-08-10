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
import * as mainApi from "../../utils/MainApi";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(true);


  function handleRegisterSubmit(email, password, name) {
    mainApi
      .register(email, password, name)
      .then((res) => {
        if (res._id) {
          console.log(res);

          setIsLoggedIn(true);
          localStorage.setItem("user", res._id);
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
          console.log(res);

          setIsLoggedIn(true);
          localStorage.setItem("user", res._id);
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
          <Route path="/signup" element={<Register onSubmit={handleRegisterSubmit} />} />
          <Route path="/signin" element={<Login onSubmit={handleLoginSubmit} />} />
          <Route path="/movies" element={<ProtectedRouteElement loggedIn={isLoggedIn} element={Movies} />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement loggedIn={isLoggedIn} element={SavedMovies} />} />
          <Route path="/profile" element={<ProtectedRouteElement loggedIn={isLoggedIn} element={Profile} />} />          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
