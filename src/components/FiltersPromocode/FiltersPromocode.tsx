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

export default function FiltersPromocode({
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
  const [sex, setSex] = useState<any>(['М', 'Ж']);
  const [status, setStatus] = useState<any>([]);
  const [country, setCountry] = useState<any>([]);
  const [city, setCity] = useState<any>([]);

  useEffect(() => {
    Api.getDropdowns().then(
      (res) => (
        console.log(res),
        setCourses(res.courses.map((item) => item.title)),
        setStatus(Object.values(res.ambassador_status)),
        setCountry(res.countries),
        setCity(res.cities)
      )
    );
  }, []);

  return (
    <div className='filters'>
      <InputWithIconPromo
        width='320px'
        placeholder='Введите ФИО'
        value=''
        setValue={() => console.log('')}
      />
      <FilterSelectGrey width='188px' height='40px' label='Выберите статус' />
      <FilterSelectGrey width='188px' height='40px' label='Сортировать' />
      <InputDateRange
        label='Дата регистрации'
        height='40px'
        width='272px'
        valueDate={valueDate}
        setValueDate={setValueDate}
      />
    </div>
  );
}
