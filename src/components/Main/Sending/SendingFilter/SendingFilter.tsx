import dayjs from 'dayjs';
import InputDate from '../../../InputDate/InputDate';
import ContentSearch from '../../../Main/Content/ContentSearch/ContentSearch';
import { useState } from 'react';
import './SendingFilter.css';
import ResetFilters from '../../../ResetFilters/ResetFilters';
import FilterSelectGrey from '../../../FilterSelectGrey/FilterSelectGrey';

export default function SendingFilter() {
  const [searchValue, setSearchValue] = useState('');
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null);


  const handleEndDateChange = (value: dayjs.Dayjs | null) => {
    setEndDate(value);
  };

  const handleResetFilters = () => {
    setSearchValue('');
    setEndDate(null);
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
        label='Страна'
        height='40px'
        width='188px'
        margin="0 8px 0 0"
        placeholder='Выбери из списка'
        options={['Россия', 'Беларусь', 'Украина', 'Пендосия']}
      />
      <FilterSelectGrey
        label='Город'
        height='40px'
        width='188px'
        margin="0 8px 0 0"
        placeholder='Выбери из списка'
        options={['Таганрог', 'Москва', 'Питер']}
      />
        <InputDate
          label="Месяц отправки"
          width="272px"
          height="40px"
          margin="0 8px 0 0"
          valueDate={endDate}
          setValueDate={handleEndDateChange}
        />
      </div>
      <ResetFilters margin="0 0 24px" onResetFilters={handleResetFilters} />
       </div>
  );
}
