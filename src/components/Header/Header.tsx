import "./Header.css";
import Bell from "../../assets/Bell.svg";
import Quest from "../../assets/Quest.svg";
import Settings from "../../assets/Settings.svg";
import { useLocation } from "react-router-dom";
import PopupNotice from "../PopupNotice/PopupNotice";

interface HeaderProps {
  title?: string;
}

export default function Header({ title = "" }: HeaderProps) {
  const location = useLocation();
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div className="header">
      <h2 className="header__title">{title}</h2>
      <div className="header__container">
        <img src={Bell} className="sidebar__icon" alt="Значок меню" />
        <img src={Quest} className="sidebar__icon" alt="Значок меню" />
        <img src={Settings} className="sidebar__icon" alt="Значок меню" />
      </div>
      <PopupNotice />
    </div>
  );
}
