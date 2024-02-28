import "./Header.css";
import Bell from "../../assets/Bell.svg";
import Quest from "../../assets/Quest.svg";
import Settings from "../../assets/Settings.svg";
import { useLocation } from "react-router-dom";
import PopupQuestion from "../PopupQuestion/PopupQuestion";
import PopupNotice from "../PopupNotice/PopupNotice";
import { useState } from "react";

interface HeaderProps {
  title?: string;
}

export default function Header({ title = '' }: HeaderProps) {
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleBellClick = () => {
    setIsPopupOpen(true);
  };

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  const isSettingsIcon =
    location.pathname === "/budjet" ||
    location.pathname === "/sending" ||
    location.pathname === "/program";

  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      <div className="header__container">
        {isSettingsIcon ? (
          <>
            <img
              src={Bell}
              className="sidebar__icon"
              alt="Bell"
              onClick={handleBellClick}
            />
            <img src={Settings} className="sidebar__icon" alt="Settings" />
            <img
              src={Quest}
              className="sidebar__icon sidebar__icon_hover"
              alt="Quest"
            />
          </>
        ) : (
          <>
            <img src={Bell} className="sidebar__icon" alt="Bell" />
            <img src={Settings} className="sidebar__icon" alt="Settings" />
          </>
        )}
        {/* <PopupQuestion /> */}
      </div>
      {isPopupOpen && <PopupNotice />}
    </div>
  );
}
