import './Sidebar.css';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../../utils/constants.tsx';
import { useState } from 'react';
import SidebarContent from '../SidebarContent/SidebarContent';
import Avatar from '../../../assets/Avatar_Default.svg?react';
import Ambassadors from '../../../assets/AmbassadorsWhite.svg';
import Promokod from '../../../assets/PromokodWhite.svg';
import Content from '../../../assets/ContentWhite.svg';
import Programm from '../../../assets/ProgrammWhite.svg';
import SendingMerch from '../../../assets/SendingMerchWhite.svg';
import Budget from '../../../assets/BudgetWhite.svg';
import AmbassadorsCheck from '../../../assets/AmbassadorsBlack.svg';
import PromokodCheck from '../../../assets/PromokodBlack.svg';
import ContentCheck from '../../../assets/ContentBlack.svg';
import ProgrammCheck from '../../../assets/ProgrammBlack.svg';
import SendingMerchCheck from '../../../assets/SendingMerchBlack.svg';
import BudgetCheck from '../../../assets/BudgetBlack.svg';

export default function Sidebar() {
  // const location = useLocation();

  const [activeItem, setActiveItem] = useState<string | null>(
    localStorage.getItem('activeItem') || null
  );

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
    localStorage.setItem('activeItem', item);
  };

  // useEffect(() => {
  //   if (location.pathname === '/login' || location.pathname === '/register') {
  //     return null;
  //   }
  // }, [location.pathname]);

  return (
    <div className='sidebar'>
      <div className='sidebar__profile'>
        <div className='sidebar__avatar'>
          <Avatar />
          <p className='sidebar__name'>{SidebarData.name}</p>
        </div>
        <Link to='/data-ambassador' className='sidebar__link'>
          <SidebarContent
            value='amba'
            img={activeItem === 'amba' ? AmbassadorsCheck : Ambassadors}
            text={SidebarData.amba}
            isActive={activeItem === 'amba'}
            onClick={() => handleMenuItemClick('amba')}
          />
        </Link>
        <Link to='/promocode' className='sidebar__link'>
          <SidebarContent
            value='promo'
            img={activeItem === 'promo' ? PromokodCheck : Promokod}
            text={SidebarData.promo}
            isActive={activeItem === 'promo'}
            onClick={() => handleMenuItemClick('promo')}
          />{' '}
        </Link>

        <Link to='/content' className='sidebar__link'>
          <SidebarContent
            value='content'
            img={activeItem === 'content' ? ContentCheck : Content}
            text={SidebarData.content}
            isActive={activeItem === 'content'}
            onClick={() => handleMenuItemClick('content')}
          />{' '}
        </Link>

        <Link to='/program' className='sidebar__link'>
          <SidebarContent
            value='programm'
            img={activeItem === 'programm' ? ProgrammCheck : Programm}
            text={SidebarData.programm}
            isActive={activeItem === 'programm'}
            onClick={() => handleMenuItemClick('programm')}
          />{' '}
        </Link>

        <Link to='/sending' className='sidebar__link'>
          <SidebarContent
            value='sendMerch'
            img={activeItem === 'sendMerch' ? SendingMerchCheck : SendingMerch}
            text={SidebarData.sendMerch}
            isActive={activeItem === 'sendMerch'}
            onClick={() => handleMenuItemClick('sendMerch')}
          />{' '}
        </Link>

        <Link to='/budjet' className='sidebar__link'>
          <SidebarContent
            value='budget'
            img={activeItem === 'budget' ? BudgetCheck : Budget}
            text={SidebarData.budget}
            isActive={activeItem === 'budget'}
            onClick={() => handleMenuItemClick('budget')}
          />
        </Link>
      </div>
    </div>
  );
}
