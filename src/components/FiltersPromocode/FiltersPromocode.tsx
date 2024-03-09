import '../Filters/Filters.css';
import FilterSelectGrey from '../FilterSelectGrey/FilterSelectGrey';
import { useEffect, useState } from 'react';
import * as Api from '../../utils/utils';
import InputDateRange from '../InputDateRange/InputDateRange';
import InputWithIconPromo from '../InputWithIcon/InputWithIconPromo';

interface FiltersProps {
  inputValue: string;
  setInputValue: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  sortValue: string;
  setSortValue: any;
  statusSortValue: string;
  setStatusSortValue: any;
  date: any;
  setDate: any;
}

export default function FiltersPromocode({
  inputValue,
  setInputValue,
  sortValue,
  setSortValue,
  statusSortValue,
  setStatusSortValue,
  date,
  setDate,
}: FiltersProps) {
  const [status, setStatus] = useState<any>([]);

  useEffect(() => {
    Api.getDropdowns().then(
      (res) => (
        console.log(res), setStatus(Object.values(res.ambassador_status))
      )
    );
  }, []);
  useEffect(() => {
    Api.getDropdowns().then((res) => console.log(res));
  }, []);

  return (
    <div className='filters'>
      <InputWithIconPromo
        width='320px'
        placeholder='Введите ФИО'
        value={inputValue}
        setValue={setInputValue}
      />
      <FilterSelectGrey
        width='188px'
        height='40px'
        label='Выберите статус'
        options={status}
        placeholder='Выбери из списка'
        valueSelectFilter={statusSortValue}
        setValueSelectFilter={setStatusSortValue}
      />
      <FilterSelectGrey
        width='188px'
        height='40px'
        label='Сортировать'
        options={['Сначала старые', 'Сначала новые']}
        placeholder='Выбери из списка'
        valueSelectFilter={sortValue}
        setValueSelectFilter={setSortValue}
      />
      <InputDateRange
        label='Дата регистрации'
        height='40px'
        width='272px'
        value={date}
        setValue={setDate}
      />
    </div>
  );
}
