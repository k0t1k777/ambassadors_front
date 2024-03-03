import './Content.css';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../Btns/SubmitLightBtn/SubmitLightBtn';
import ContentFilter from '../Content/ContentFilter/ContentFilter';

export default function Content() {
  return (
    <section className='content'>
      <nav className='content__nav'>
        <SubmitBtn
          title='Создать задачу'
          width='250px'
          height='50px'
          margin='0 8px 0  0 '
        />
        <SubmitLightBtn
          title='История задач'
          width='250px'
          height='50px'
          color='#23272E'
        />
      </nav>
      <div className='content__filter'>
        <ContentFilter />
      </div>
    </section>
  );
}
