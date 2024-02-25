import './DataAmbassador.css';
import InputWithIcon from '../../InputWithIcon/InputWithIcon';
import BtnSubmit from '../../SubmitBtn/SubmitBtn';
import ResetFilters from '../../ResetFilters/ResetFilters';
import Filters from '../../Filters/Filters';

export default function DataAmbassador() {
  return (
    <section className='data-ambassador'>
      <div className='data-ambassador__container'>
        <div className='search-add'>
          <InputWithIcon width='276px' placeholder='Поиск амбассадора' />
          <BtnSubmit
            title='Добавить амбассадора'
            width='250px'
            height='50px'
            fontSize='14px'
            margin='32px 0 28px auto'
          />
        </div>
        <div className='data-ambassador__filters'>
          <ResetFilters />
          <Filters />
        </div>
      </div>
    </section>
  );
}
