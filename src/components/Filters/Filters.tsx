import './Filters.css';
import DatePicker from '../InputDate/InputDate';
import FilterSelectGrey from '../FilterSelectGrey/FilterSelectGrey';

export default function Filters() {
  return (
    <div className='filters'>
      <FilterSelectGrey />
      <FilterSelectGrey />
      <DatePicker label='Дата регистрации' width='272px' />
      <FilterSelectGrey />
      <FilterSelectGrey />
      <FilterSelectGrey />
    </div>
  );
}
