import './Filters.css';
import DatePicker from '../InputDate/InputDate';
import FilterSelectGrey from '../FilterSelectGrey/FilterSelectGrey';
import { Ambassador } from '../Main/DataAmbassador/DataAmbassador';
import { useEffect, useState } from 'react';

interface FiltersProps {
  courseValue: string;
  setCourseValue: (value: string) => void;
  sexValue: string;
  setSexValue: (value: string) => void;
  statusValue: string;
  setStatusValue: (value: string) => void;
  cityValue: string;
  setCityValue: (value: string) => void;
  countryValue: string;
  setCountryValue: (value: string) => void;
  ambassadors: Ambassador[];
}

export default function Filters({
  courseValue,
  cityValue,
  countryValue,
  sexValue,
  statusValue,
  setCityValue,
  setCountryValue,
  setCourseValue,
  setSexValue,
  setStatusValue,
  ambassadors,
}: FiltersProps) {
  const [courses, setCourses] = useState<string[]>([]);
  const [sex, setSex] = useState(['М', 'Ж']);
  const [status, setStatus] = useState([
    'Активный',
    'На паузе',
    'Не амбассадор',
    'Уточняется',
  ]);
  const [country, setCountry] = useState<string[]>([]);
  const [city, setCity] = useState<string[]>([]);

  useEffect(() => {
    setCourses([...new Set(ambassadors.map((item) => item.course.title))]);
    setCountry([...new Set(ambassadors.map((item) => item.country))]);
    setCity([...new Set(ambassadors.map((item) => item.city))]);
  }, [ambassadors]);

  return (
    <div className='filters'>
      <FilterSelectGrey
        label='Направление'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
        options={courses}
        valueSelectFilter={courseValue}
        setValueSelectFilter={setCourseValue}
      />
      <FilterSelectGrey
        label='Пол'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
        options={sex}
        valueSelectFilter={sexValue}
        setValueSelectFilter={setSexValue}
      />
      <DatePicker label='Дата регистрации' height='40px' width='272px' />
      <FilterSelectGrey
        label='Статус'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
        options={status}
        valueSelectFilter={statusValue}
        setValueSelectFilter={setStatusValue}
      />
      <FilterSelectGrey
        label='Страна'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
        options={country}
        valueSelectFilter={countryValue}
        setValueSelectFilter={setCountryValue}
      />
      <FilterSelectGrey
        label='Город'
        height='40px'
        width='188px'
        placeholder='Выбери из списка'
        options={city}
        valueSelectFilter={cityValue}
        setValueSelectFilter={setCityValue}
      />
    </div>
  );
}
