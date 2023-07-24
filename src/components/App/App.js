import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/saved-movies" element={<SavedMovies />}/>
      </Routes>
    </div>
  );
}

export default App;
