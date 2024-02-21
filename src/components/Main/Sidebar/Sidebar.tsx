import "./Sidebar.css";
import Avatar from "../../../assets/Avatar_Default.svg";
import Ambassadors from "../../../assets/Ambassadors.svg";
import Promokod from "../../../assets/Promokod.svg";
import Content from "../../../assets/Content.svg";
import Program from "../../../assets/Program.svg";
import SendingMerch from "../../../assets/SendingMerch.svg";
import Budget from "../../../assets/Budget.svg";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  // Проверяем, равен ли текущий путь "/login"
  if (location.pathname === "/login") {
    return null; // Если текущий путь "/login", не отображаем Header
  }
  
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img src={Avatar} className="sidebar__avatar" alt="Фото профиля" />
        <h3 className="sidebar__name">JB</h3>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__container">
          <img src={Ambassadors} className="sidebar__img" alt="Иконка меню" />
          <p className="sidebar__text">Амбассадоры</p>
        </div>
        <div className="sidebar__container">
          <img src={Promokod} className="sidebar__img" alt="Иконка меню" />
          <p className="sidebar__text">Промокод</p>
        </div>
        <div className="sidebar__container">
          <img src={Content} className="sidebar__img" alt="Иконка меню" />
          <p className="sidebar__text">Контент</p>
        </div>
        <div className="sidebar__container">
          <img src={Program} className="sidebar__img" alt="Иконка меню" />
          <p className="sidebar__text">Программа</p>
        </div>
        <div className="sidebar__container">
          <img src={SendingMerch} className="sidebar__img" alt="Иконка меню" />
          <p className="sidebar__text">Отправка мерча</p>
        </div>
        <div className="sidebar__container">
          <img src={Budget} className="sidebar__img" alt="Иконка меню" />
          <p className="sidebar__text">Бюджет</p>
        </div>
      </div>
    </div>
  );
}
