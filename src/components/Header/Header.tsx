import "./Header.css";
import Bell from "../../assets/Bell.svg";
import Quest from "../../assets/Quest.svg";
import Settings from "../../assets/Settings.svg";
import Title from "../Title/Title";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  // Проверяем, равен ли текущий путь "/login"
  if (location.pathname === "/login") {
    return null; // Если текущий путь "/login", не отображаем Header
  }
  
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