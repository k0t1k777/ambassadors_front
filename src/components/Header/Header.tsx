import "./Header.css";
import Bell from "../../assets/Bell.svg";
import Quest from "../../assets/Quest.svg";
import Settings from "../../assets/Settings.svg";
import Title from "../Title/Title";

export default function Header() {
  return (
    <div className="header">
      <Title />
      <div className="header__container">
        <img src={Bell} className="sidebar__icon" alt="Значок меню" />
        <img src={Quest} className="sidebar__icon" alt="Значок меню" />
        <img src={Settings} className="sidebar__icon" alt="Значок меню" />
      </div>
    </div>
  );
}
