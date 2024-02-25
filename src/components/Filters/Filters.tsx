import './Filters.css';
import DatePicker from '../InputDate/InputDate';

export default function Filters() {
  return (
    <div className='filters'>
      <DatePicker label='Дата регистрации' width='272px' />
    </div>
  );
}
