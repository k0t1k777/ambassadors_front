import './Sidebar.css';
import Avatar from '../../../assets/Avatar_Default.svg';
import Ambassadors from '../../../assets/Ambassadors.svg';
import Promokod from '../../../assets/Promokod.svg';
import Content from '../../../assets/Content.svg';
import Program from '../../../assets/Program.svg';
import SendingMerch from '../../../assets/SendingMerch.svg';
import Budget from '../../../assets/Budget.svg';
import { useLocation } from 'react-router-dom';
import { SidebarData } from '../../../utils/constants.tsx';

export default function Sidebar() {
  const location = useLocation();

  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
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
          <p className="sidebar__text">{SidebarData.amba}</p>
        </div>
        <div className="sidebar__container">
          <img src={Promokod} className="sidebar__img" alt="Иконка меню" />
          <p className="sidebar__text">{SidebarData.promo}</p>
        </div>
        <div className="sidebar__container">
          <img src={Content} className="sidebar__img" alt="Иконка меню" />
          <p className="sidebar__text">{SidebarData.content}</p>
        </div>
        <div className="sidebar__container">
          <img src={Program} className="sidebar__img" alt="Иконка меню" />
          <p className="sidebar__text">{SidebarData.programm}</p>
        </div>
        <div className="sidebar__container">
          <img src={SendingMerch} className="sidebar__img" alt="Иконка меню" />
          <p className="sidebar__text">{SidebarData.sendMerch}</p>
        </div>
        <div className="sidebar__container">
          <img src={Budget} className="sidebar__img" alt="Иконка меню" />
          <p className="sidebar__text">{SidebarData.budget}</p>
        </div>
      </div>
    </div>
  );
}
