import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />}/>
      </Routes>
    </div>
  );
}

export default App;
