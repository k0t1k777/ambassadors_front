import './Filters.css';
import DatePicker from '../InputDate/InputDate';
import FilterSelectGrey from '../FilterSelectGrey/FilterSelectGrey';
import { useState } from 'react';

export default function Filters() {
  const [direction, setDirection] = useState([
    'Курс1',
    'Курс2',
    'Курс3',
    'Курс4',
    'Курс5',
    'Курс6',
    'Курс7',
  ]);

  return (
    <div className='filters'>
      <FilterSelectGrey
        label='Направление'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
        options={direction}
      />
      <FilterSelectGrey
        label='Пол'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
        options={['М', 'Ж']}
      />
      <DatePicker label='Дата регистрации' height='40px' width='272px' />
      <FilterSelectGrey
        label='Статус'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
        options={['Активный', 'Не амбассадор', 'На паузе', 'Уточняется']}
      />
      <FilterSelectGrey
        label='Страна'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
        options={['Россия', 'Беларусь', 'Украина', 'Пендосия']}
      />
      <FilterSelectGrey
        label='Город'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
        options={['Таганрог', 'Москва', 'Питер']}
      />
    </div>
  );
}
