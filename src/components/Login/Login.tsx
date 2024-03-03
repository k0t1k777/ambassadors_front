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
    .email('Введите корректный email')
    .required('Почта обязательна для заполнения'),
  password: yup
    .string()
    .required('Пароль обязателен для заполнения')
    .min(4, 'Пароль должен содержать не менее 4 символов')
});

interface LoginForm {
  email: string;
  password: string;
}

export default function Login({ onLogin }: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = (data: LoginForm) => {
    console.log('вход:', data);
    onLogin(data.email, data.password);
  };

  return (
    <section className="form__section">
      <div className="form__content">
        <h2 className="form__title">{LoginData.title}</h2>
        <p
          className={`form__subtitle ${
            errors.email && errors.password ? 'form__subtitle-error-message' : ''
          }`}
        >
          {errors.email && errors.password
            ? 'Не удается войти. Пожалуйста, проверьте правильность написания логина и пароля'
            : LoginData.signin}
        </p>

        <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <input id="email" type="email" {...register('email')} className="form__input" />
          {errors.email && (
            <span className="form__input-error-message">{errors.email.message}</span>
          )}

          <input id="password" type="password" {...register('password')} className="form__input" />
          {errors.password && (
            <span className="form__input-error-message">{errors.password.message}</span>
          )}

          <SubmitBtn
            title="Войти"
            width="306px"
            height="50px"
            fontSize="16px"
            disabled={!isValid}
          />
        </form>
      </div>
    </section>
  );
}
