import { Link } from 'react-router-dom';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import './Register.css';
import YandexMail from '../../assets/YandexMail.svg';
import { RegisterData } from '../../utils/constants';

export default function Register() {
  return (
    <section className="register_section">
      <div className="register__content">
        <h2 className="register__title">{RegisterData.title}</h2>
        <div className="register">
          <img src="#" alt="avatar" className="register__avatar" />
          <SubmitBtn
            title="Войти через Яндекс почту"
            width="360px"
            height="56px"
            fontSize="16px"
            icon={<img src={YandexMail} alt="Yandex Mail Icon" />}
          />
        </div>
      </div>
      <div className="register__text">
        <p className="register__subtitle">{RegisterData.text}</p>
        <Link to="/login" className="register__link">
          {RegisterData.signin}
        </Link>
      </div>
    </section>
  );
}
