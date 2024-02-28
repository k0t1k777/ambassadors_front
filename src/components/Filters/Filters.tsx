import './Filters.css';
import DatePicker from '../InputDate/InputDate';
import FilterSelectGrey from '../FilterSelectGrey/FilterSelectGrey';

export default function Filters() {
  return (
    <div className='filters'>
      <FilterSelectGrey
        label='Направление'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
      />
      <FilterSelectGrey
        label='Пол'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
      />
      <DatePicker label='Дата регистрации' height='40px' width='272px' />
      <FilterSelectGrey
        label='Статус'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
      />
      <FilterSelectGrey
        label='Страна'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
      />
      <FilterSelectGrey
        label='Город'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
      />
    </div>
  );
}
