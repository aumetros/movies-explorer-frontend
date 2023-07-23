import "./App.css";
import Main from "../Main/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Main />
    </div>
  );
}

export default App;
