import Button from '@mui/material/Button';
import './AuthForm.css';

function AuthForm() {
  return (
    <section className="form__section">
      <div className="form__content">
        <h2 className="form__title">CRM Система</h2>
        <p className="form__subtitle">Войти в аккаунт</p>
        <form className="form" noValidate>
          <input name="email" type="email" placeholder="Почта" className="form__input " required />
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            className="form__input "
            required
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#23272E',
              color: '#fff',
              border: 'none',
              '&:hover': {
                backgroundColor: '#404651'
              },
              width: '320px',
              height: '50px'
            }}
            disableElevation
          >
            Войти
          </Button>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
