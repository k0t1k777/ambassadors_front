import './Content.css';
import Header from '../../Header/Header';
import BtnSubmit from '../../SubmitBtn/SubmitBtn';
import BtnSubmitLight from '../../SubmitLightBtn/SubmitLightBtn';

export default function Content() {
  return (
    <>
      <Header title="Контент" />
      <section className="content">
        <nav className="content__container-button">
          <BtnSubmit title="Создать задачу" width="250px" height="50px" fontSize="16px" />
          <BtnSubmitLight
            title="История задач"
            width="250px"
            height="50px"
            color="#23272E"
            fontSize="16px"
          />
        </nav>
      </section>
    </>
  );
}
