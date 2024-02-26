import FilterSelectGrey from '../../FilterSelectGrey/FilterSelectGrey';
import InputDate from '../../InputDate/InputDate';
import Input from '../../Input/Input';
import './ContentFilter.css';

export default function ContentFilter() {
  return (
    <div className="content__filter">
      <Input label="ФИО амбассадора" placeholder="Заполнено" height="40px" />
      <FilterSelectGrey
        label="Выберите статус"
        width="124px"
        height="41px"
        defaultValue="Новенькие"
        fontSize="14px"
        options={['Новенькие', 'В процессе', 'Выполнено']}
      />
      <InputDate label="От" width="188px" />
      <InputDate label="До" width="188px" />
    </div>
  );
}
