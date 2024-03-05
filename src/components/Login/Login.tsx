import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import './Login.css';
import { LoginData } from '../../utils/constants';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Введите адрес почты вида Ivan@mail.ru')
    .required('Введите адрес почты вида Ivan@mail.ru'),
  password: yup.string().required('Неверный пароль')
});

interface LoginForm {
  email: string;
  password: string;
}

export default function Login({ onLogin }: LoginProps) {
  const [error, setError] = useState(false);
  console.log(onLogin);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = (data: LoginForm) => {
    if (!isValid) {
      setError(true);
      console.error('Ошибка валидации:');
    } else {
      console.log('вход:', data);
      onLogin(data.email, data.password);
    }
  };

  return (
    <section className="form__section">
      <div className="form__content">
        <h2 className="form__title">{LoginData.title}</h2>
        {error ? (
          <p className="form__subtitle-error-message">{LoginData.error}</p>
        ) : (
          <p className="form__subtitle">{LoginData.signin}</p>
        )}

        <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form__label">
            <input
              id="email"
              type="email"
              placeholder="Почта"
              {...register('email')}
              className={`form__input ${errors.email ? 'form__input-text-error' : ''}`}
            />
            {errors.email && (
              <span
                className={`form__input-error ${errors.email ? 'form__input-error_visible' : ''}`}
              >
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="form__label">
            <input
              id="password"
              type="password"
              placeholder="Пароль"
              {...register('password')}
              className={`form__input ${errors.password ? 'form__input-text-error' : ''}`}
            />
            {errors.password && (
              <span
                className={`form__input-error ${
                  errors.password ? 'form__input-error_visible' : ''
                }`}
              >
                {errors.password.message}
              </span>
            )}
          </div>
          <SubmitBtn
            title="Войти"
            width="306px"
            height="50px"
            fontSize="16px"
            disabled={!isValid}
            onClick={handleSubmit(onSubmit)}
          />
        </form>
      </div>
    </section>
  );
}
