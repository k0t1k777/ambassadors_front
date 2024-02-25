import "./Sidebar.css";
import { useLocation } from "react-router-dom";
import { SidebarData } from "../../../utils/constants.tsx";
import { useState } from "react";
import SidebarContent from "../SidebarContent/SidebarContent.tsx";

import Avatar from "../../../assets/Avatar_Default.svg";
import Ambassadors from "../../../assets/AmbassadorsWhite.svg";
import Promokod from "../../../assets/PromokodWhite.svg";
import Content from "../../../assets/ContentWhite.svg";
import Programm from "../../../assets/ProgrammWhite.svg";
import SendingMerch from "../../../assets/SendingMerchWhite.svg";
import Budget from "../../../assets/BudgetWhite.svg";

import AmbassadorsCheck from "../../../assets/AmbassadorsBlack.svg";
import PromokodCheck from "../../../assets/PromokodBlack.svg";
import ContentCheck from "../../../assets/ContentBlack.svg";
import ProgrammCheck from "../../../assets/ProgrammBlack.svg";
import SendingMerchCheck from "../../../assets/SendingMerchBlack.svg";
import BudgetCheck from "../../../assets/BudgetBlack.svg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const [activeItem, setActiveItem] = useState(null);

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
  };

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <div className="sidebar__avatar">
          <img src={Avatar} alt="Avatar" />
          <p className="sidebar__name">{SidebarData.name}</p>
        </div>
        <Link to="/data-ambassador">
          <SidebarContent
            value="amba"
            img={activeItem === "amba" ? AmbassadorsCheck : Ambassadors}
            text={SidebarData.amba}
            isActive={activeItem === "amba"}
            onClick={() => handleMenuItemClick("amba")}
          />
        </Link>
        <SidebarContent
          value="promo"
          img={activeItem === "promo" ? PromokodCheck : Promokod}
          text={SidebarData.promo}
          isActive={activeItem === "promo"}
          onClick={() => handleMenuItemClick("promo")}
        />
        <SidebarContent
          value="content"
          img={activeItem === "content" ? ContentCheck : Content}
          text={SidebarData.content}
          isActive={activeItem === "content"}
          onClick={() => handleMenuItemClick("content")}
        />
        <SidebarContent
          value="programm"
          img={activeItem === "programm" ? ProgrammCheck : Programm}
          text={SidebarData.programm}
          isActive={activeItem === "programm"}
          onClick={() => handleMenuItemClick("programm")}
        />
        <SidebarContent
          value="sendMerch"
          img={activeItem === "sendMerch" ? SendingMerchCheck : SendingMerch}
          text={SidebarData.sendMerch}
          isActive={activeItem === "sendMerch"}
          onClick={() => handleMenuItemClick("sendMerch")}
        />
        <Link to="/budjet">
          <SidebarContent
            value="budget"
            img={activeItem === "budget" ? BudgetCheck : Budget}
            text={SidebarData.budget}
            isActive={activeItem === "budget"}
            onClick={() => handleMenuItemClick("budget")}
          />
        </Link>
      </div>
    </div>

    // <div className="sidebar">
    //   <div className="sidebar__profile">
    //     <img src={Avatar} className="sidebar__avatar" alt="Фото профиля" />
    //     <h3 className="sidebar__name">{SidebarData.name}</h3>
    //   </div>
    //   <div className="sidebar__menu">
    //     <div className="sidebar__container">
    //       <img src={Ambassadors} className="sidebar__img" alt="Иконка меню" />
    //       <p className="sidebar__text">{SidebarData.amba}</p>
    //     </div>
    //     <div className="sidebar__container">
    //       <img src={Promokod} className="sidebar__img" alt="Иконка меню" />
    //       <p className="sidebar__text">{SidebarData.promo}</p>
    //     </div>
    //     <div className="sidebar__container">
    //       <img src={Content} className="sidebar__img" alt="Иконка меню" />
    //       <p className="sidebar__text">{SidebarData.content}</p>
    //     </div>
    //     <div className="sidebar__container">
    //       <img src={Program} className="sidebar__img" alt="Иконка меню" />
    //       <p className="sidebar__text">{SidebarData.programm}</p>
    //     </div>
    //     <div className="sidebar__container">
    //       <img src={SendingMerch} className="sidebar__img" alt="Иконка меню" />
    //       <p className="sidebar__text">{SidebarData.sendMerch}</p>
    //     </div>
    //     <div className="sidebar__container">
    //       <img src={Budget} className="sidebar__img" alt="Иконка меню" />
    //       <p className="sidebar__text">{SidebarData.budget}</p>
    //     </div>
    //   </div>
    // </div>
  );
}
