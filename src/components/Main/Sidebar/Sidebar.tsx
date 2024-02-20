import './Sidebar.css'
import Avatar from "../../../assets/Avatar_Default.png";


export default function Sidebar() {
  return (
    <div className='sidebar'>
       <div className="navBar__profile">
          <img src={Avatar} className="navBar__avatar" alt="Фото профиля" />
          <h3 className="navBar__name">Имя</h3>
        </div>
    </div>
  )
}