import ContentSearch from "../../../Main/Content/ContentSearch/ContentSearch";
import { useEffect, useState } from "react";
import "./SendingFilter.css";
import ResetFilters from "../../../ResetFilters/ResetFilters";
import FilterSelectGrey from "../../../FilterSelectGrey/FilterSelectGrey";
import * as Api from "../../../../utils/utils";

// interface SendingFilterProps {
//   onResetFilters: () => void;
// }

interface FiltersProps {
  cityValue?: string;
  setCityValue?: (value: string) => void;
  countryValue?: string;
  setCountryValue?: (value: string) => void;
  mounthValue?: string;
  setMounthValue?: (value: string) => void;
  months?: string;
}

export default function SendingFilter({
  setCityValue,
  setCountryValue,
  setMounthValue,
  mounthValue,
  cityValue,
  countryValue,
}: FiltersProps) {
  const [searchValue, setSearchValue] = useState("");
  const [months, setMonths] = useState<any>([]);
  console.log("months: ", months);
  const [country, setCountry] = useState<any>([]);
  const [city, setCity] = useState<any>([]);

  useEffect(() => {
    Api.getDropdowns().then(
      (res) => (
        console.log(res),
        setCountry(res.countries),
        setCity(res.cities),
        setMonths(res.months)
      )
    );
  }, []);

  const handleResetFilters = () => {
    setSearchValue("");
    setCountry("");
    setCity("");
    setMonths("");
  };

  return (
    <div>
      <div className="sending__filter-select">
        <ContentSearch
          label="ФИО амбассадора"
          placeholder="Поиск амбассадора"
          width="320px"
          margin="0 8px 0 0"
          valueSearch={searchValue}
          setValueSearch={setSearchValue}
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
          valueSelectFilter={mounthValue}
          setValueSelectFilter={setMounthValue}
          placeholder="Выбери из списка"
          options={months}
        />
      </div>
      <ResetFilters margin="0 0 24px" onResetFilters={handleResetFilters} />
    </div>
  );
}
