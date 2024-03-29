import { useEffect, useState } from 'react';
import './SendingFilter.css';
import ResetFilters from '../../../ResetFilters/ResetFilters';
import FilterSelectGrey from '../../../FilterSelectGrey/FilterSelectGrey';
import * as Api from '../../../../utils/utils';
import InputWithIcon from '../../../InputWithIcon/InputWithIcon';

interface FiltersProps {
  cityValue?: string;
  setCityValue?: (value: string) => void;
  countryValue?: string;
  setCountryValue?: (value: string) => void;
  monthsValue?: string;
  setMonthsValue?: (value: string) => void;
  value?: any;
  setValue?: any;
  onResetFilters?: (value: string) => void;
}

export default function SendingFilter({
  setCityValue,
  setCountryValue,
  setMonthsValue,
  monthsValue,
  cityValue,
  countryValue,
  value,
  setValue
}: FiltersProps) {
  const [months, setMonths] = useState<any>([]);
  const [country, setCountry] = useState<any>([]);
  const [city, setCity] = useState<any>([]);

  useEffect(() => {
    Api.getDropdowns().then(
      res => (
        console.log(res), setCountry(res.countries), setCity(res.cities), setMonths(res.months)
      )
    );
  }, []);

  const handleResetFilters = () => {
    console.log('ff');
    // setCountry('');
    // setCity('');
    // setMonths('');
  };

  return (
    <div>
      <div className="sending__filter-select">
        <InputWithIcon
          width="276px"
          placeholder="Поиск амбассадора"
          value={value}
          setValue={e => setValue(e.target.value)}
          margin="0 8px 0  0"
        />
        <FilterSelectGrey
          label="Страна"
          height="40px"
          width="188px"
          margin="0 8px 0 0"
          placeholder="Выбери из списка"
          valueSelectFilter={countryValue}
          setValueSelectFilter={setCountryValue}
          options={country}
        />
        <FilterSelectGrey
          label="Город"
          height="40px"
          width="188px"
          placeholder="Выбери из списка"
          margin="0 8px 0 0"
          options={city}
          valueSelectFilter={cityValue}
          setValueSelectFilter={setCityValue}
        />
        <FilterSelectGrey
          label="Месяц отправки"
          width="272px"
          height="40px"
          margin="0 8px 0 0"
          valueSelectFilter={monthsValue}
          setValueSelectFilter={setMonthsValue}
          placeholder="Выбери из списка"
          options={months}
        />
      </div>
      <ResetFilters margin="0 0 24px 10px" onResetFilters={handleResetFilters} />
    </div>
  );
}
