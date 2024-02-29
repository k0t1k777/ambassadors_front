import FilterSelectGrey from '../../../FilterSelectGrey/FilterSelectGrey';
import InputDate from '../../../InputDate/InputDate';
import InputText from '../../../InputText/InputText';

import './ContentFilter.css';

export default function ContentFilter() {
  return (
    <div className="content__filter">
      <InputText label="ФИО амбассадора" placeholder="Введите ФИО" />
      <FilterSelectGrey
        label="Выберите статус"
        width="124px"
        height="41px"
        placeholder="Новенькие"
        fontSize="14px"
        options={['Все', 'Новенькие', 'В процессе', 'Выполнено']}
      />
      <InputDate label="От" width="272px" height="40px" />
      <InputDate label="До" width="272px" height="40px" />
    </div>
  );
}
