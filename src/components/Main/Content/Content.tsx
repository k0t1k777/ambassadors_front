import './Content.css';
import Header from '../../Header/Header';

export default function Content() {
  return (
    <>
      <Header title="Контент" />
      <div className="content">
        <nav className="content__container-button">
          <p>кнопка 1</p>
          <p>кнопка 2</p>
        </nav>
      </div>
    </>
  );
}
