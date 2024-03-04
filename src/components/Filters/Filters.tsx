import './Filters.css';
import InputDate from '../InputDate/InputDate';
import FilterSelectGrey from '../FilterSelectGrey/FilterSelectGrey';
import { Ambassador } from '../Main/DataAmbassador/DataAmbassador';
import { useEffect, useState } from 'react';

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
  ambassadors,
  valueDate,
  setValueDate,
}: FiltersProps) {
  const [sex, setSex] = useState(['М', 'Ж']);
  const [status, setStatus] = useState([
    'Активный',
    'На паузе',
    'Не амбассадор',
    'Уточняется',
  ]);
  const [country, setCountry] = useState<string[]>([]);
  const [city, setCity] = useState<string[]>([]);
  const [courses, setCourses] = useState<string[]>([]);

  // const courses = [
  //   'Менеджер проектов',
  //   'Android-разработчик',
  //   'Продакт-менеджер для специалистов с опытом',
  //   'Бизнес-аналитик',
  //   'IOS-разработчик',
  //   'DevOps для эксплуатации и разработки',
  //   'Продвинутый GO-разработчик',
  //   'Фулстек разработчик',
  //   'Коммерческий иллюстратор',
  //   'Java-разработчик',
  //   'SQL для работы с данными и аналитики',
  //   'Продуктовый дизайн',
  //   'Алгоритмы для разработчиков',
  //   'Рабочая коммуникация',
  //   'Критическое мышление',
  //   'Английский',
  //   'Управление',
  //   'IT-рекрутер',
  //   'Инженер данных',
  //   'C++',
  //   'Middle Python',
  //   'Графический дизайнер',
  //   'Маркетинг',
  //   'UX/UI-дизайнер',
  //   'Инженер по тестированию (QA)',
  //   'Веб-разработчик',
  //   'Python-разработчик',
  //   'Специалист по Data Science',
  //   'Аналитик данных',
  // ];

  useEffect(() => {
    setCourses([...new Set(ambassadors?.map((item) => item.course.title))]);
    setCountry([...new Set(ambassadors?.map((item) => item.country))]);
    setCity([...new Set(ambassadors?.map((item) => item.city))]);
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
