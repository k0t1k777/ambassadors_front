import '../Filters/Filters.css';
import InputDate from '../InputDate/InputDate';
import FilterSelectGrey from '../FilterSelectGrey/FilterSelectGrey';
import { Ambassador } from '../Main/DataAmbassador/DataAmbassador';
import { useEffect, useState } from 'react';
import * as Api from '../../utils/utils';
import InputWithIcon from '../InputWithIcon/InputWithIcon';
import InputDateRange from '../InputDateRange/InputDateRange';
import InputWithIconPromo from '../InputWithIcon/InputWithIconPromo';

interface FiltersProps {
  inputValue: string;
  setInputValue: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function FiltersPromocode({
  inputValue,
  setInputValue,
}: FiltersProps) {
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
      <FilterSelectGrey width='188px' height='40px' label='Выберите статус' />
      <FilterSelectGrey width='188px' height='40px' label='Сортировать' />
      <InputDateRange
        label='Дата регистрации'
        height='40px'
        width='272px'
        // valueDate={valueDate}
        // setValueDate={setValueDate}
      />
    </div>
  );
}
