import "./Header.css";
import Bell from "../../assets/Bell.svg";
import Quest from "../../assets/Quest.svg";
import Settings from "../../assets/Settings.svg";

export default function Header() {
  return (
    <div className="header">
      <p className="header__name">Данные амбассадоров</p>
      <div className="header__container">
        <img src={Bell} className="sidebar__icon" alt="Значок меню" />
        <img src={Quest} className="sidebar__icon" alt="Значок меню" />
        <img src={Settings} className="sidebar__icon" alt="Значок меню" />
      </div>
    </div>
  );
}
