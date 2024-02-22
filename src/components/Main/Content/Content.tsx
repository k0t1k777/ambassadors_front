import './Content.css';
import Header from '../../Header/Header';
import BtnSubmit from '../../BtnSubmit/BtnSubmit';
import BtnSubmitLight from '../../BtnSubmitLight/BtnSubmitLight';

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
