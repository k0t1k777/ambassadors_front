import './Content.css';
import Header from '../../Header/Header';
import SubmitBtn from '../../SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../SubmitLightBtn/SubmitLightBtn';

export default function Content() {
  return (
    <>
      <Header title="Контент" />
      <section className="content">
        <nav className="content__nav">
          <SubmitBtn title="Создать задачу" width="250px" height="50px" margin="0 8px 0  0 " />
          <SubmitLightBtn title="История задач" width="250px" height="50px" color="#23272E" />
        </nav>
      </section>
    </>
  );
}
