import './Filters.css';
import InputDate from '../InputDate/InputDate';
import FilterSelectGrey from '../FilterSelectGrey/FilterSelectGrey';
import { Ambassador } from '../Main/DataAmbassador/DataAmbassador';
import { useEffect, useState } from 'react';
import * as Api from '../../utils/utils';
import dayjs from 'dayjs';

interface FiltersProps {
  courseValue?: string;
  setCourseValue?: (value: string) => void;
  sexValue?: string;
  setSexValue?: (value: string) => void;
  statusValue?: string;
  setStatusValue?: (value: string) => void;
  cityValue?: string;
  setCityValue?: (value: string) => void;
  countryValue?: string;
  setCountryValue?: (value: string) => void;
  ambassadors?: Ambassador[];
  valueDate?: dayjs.Dayjs | null;
  setValueDate?: (value: dayjs.Dayjs | null) => void;
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
  valueDate,
  setValueDate,
}: FiltersProps) {
  const [courses, setCourses] = useState<any>([]);
  const [status, setStatus] = useState<any>([]);
  const [country, setCountry] = useState<any>([]);
  const [city, setCity] = useState<any>([]);

  useEffect(() => {
    Api.getDropdowns().then(
      (res) => (
        console.log(res),
        setCourses(res.courses.map((item: any) => item.title)),
        setStatus(Object.values(res.ambassador_status)),
        setCountry(res.countries),
        setCity(res.cities)
      )
    );
  }, []);

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
        options={['М', 'Ж']}
        valueSelectFilter={sexValue}
        setValueSelectFilter={setSexValue}
      />

      <InputDate
        label='Дата регистрации'
        height='40px'
        width='272px'
        valueDate={valueDate}
        setValueDate={setValueDate}
      />
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
