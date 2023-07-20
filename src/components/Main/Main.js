import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import Project from "../Project/Project";

function Main() {
  return (
    <div className="main">
      <Header />
      <Promo />
      <NavTab />
      <Project />
    </div>
  );
}

export default Main;
