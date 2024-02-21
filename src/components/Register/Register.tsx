import { Link } from 'react-router-dom';
import BtnSubmit from '../BtnSubmit/BtnSubmit';
import './Register.css';
import YandexMail from '../../assets/YandexMail.svg';

function Register() {
  return (
    <section className="register_section">
      <div className="register__content">
        <h2 className="register__title">Добро пожаловать, Мария</h2>
        <div className="register">
          <img src="#" alt="avatar" className="register__avatar" />
          <BtnSubmit
            title="Войти через Яндекс почту"
            width="360px"
            height="56px"
            icon={<img src={YandexMail} alt="Yandex Mail Icon" />}
          />
        </div>
      </div>
      <div className="register__text">
        <p className="register__subtitle">Войти под другой учетной записи?</p>
        <Link to="/login" className="register__link">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
