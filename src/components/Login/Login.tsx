import { useForm } from 'react-hook-form';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import './Login.css';
import { LoginData } from '../../utils/constants';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <section className="form__section">
      <div className="form__content">
        <h2 className="form__title">{LoginData.title}</h2>
        <p className="form__subtitle">{LoginData.signin}</p>
        <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="Почта"
            className={`form__input ${errors.email ? 'error' : ''}`}
          />
          {errors.email && <span className="error-message">{LoginData.errorEmail}</span>}
          <input
            {...register('password', { required: true })}
            type="password"
            placeholder="Пароль"
            className={`form__input ${errors.password ? 'error' : ''}`}
          />
          {errors.password && <span className="error-message">{LoginData.errorPassword}</span>}
          <SubmitBtn title="Войти" width="306px" height="50px" fontSize="16px" />
        </form>
      </div>
    </section>
  );
}
