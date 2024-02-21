// import BtnSubmit from '../BtnSubmit/BtnSubmit';
// import './AuthForm.css';

// function AuthForm() {
//   return (
//     <section className="form__section">
//       <div className="form__content">
//         <h2 className="form__title">CRM Система</h2>
//         <p className="form__subtitle">Войти в аккаунт</p>
//         <form className="form" noValidate>
//           <input name="email" type="email" placeholder="Почта" className="form__input " required />
//           <input
//             name="password"
//             type="password"
//             placeholder="Пароль"
//             className="form__input "
//             required
//           />
//           <BtnSubmit title="Войти" width="360px" height="56px" />
//         </form>
//       </div>
//     </section>
//   );
// }

// export default AuthForm;

import { useForm } from 'react-hook-form';
import BtnSubmit from '../BtnSubmit/BtnSubmit';
import './AuthForm.css';

function AuthForm() {
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
        <h2 className="form__title">CRM Система</h2>
        <p className="form__subtitle">Войти в аккаунт</p>
        <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="Почта"
            className={`form__input ${errors.email ? 'error' : ''}`}
          />
          {errors.email && <span className="error-message">Введите вашу почту</span>}
          <input
            {...register('password', { required: true })}
            type="password"
            placeholder="Пароль"
            className={`form__input ${errors.password ? 'error' : ''}`}
          />
          {errors.password && <span className="error-message">Введите пароль</span>}
          <BtnSubmit title="Войти" width="360px" height="56px" />
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
