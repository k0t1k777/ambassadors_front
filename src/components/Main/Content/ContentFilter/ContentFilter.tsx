import FilterSelectGrey from '../../../FilterSelectGrey/FilterSelectGrey';
import dayjs from 'dayjs';
import InputDate from '../../../InputDate/InputDate';
import ContentSearch from '../ContentSearch/ContentSearch';
import { useState } from 'react';
import './ContentFilter.css';
import ContentNewAmba from '../ContentNewAmba/ContentNewAmba';
import ContentInProcessAmba from '../ContentInProcessAmba/ContentInProcessAmba';
import ContentSuccessAmba from '../ContentSuccessAmba/ContentSuccessAmba';
import ContentAllAmba from '../ContentAllAmba/ContentAllAmba';
import ResetFilters from '../../../ResetFilters/ResetFilters';

export default function ContentFilter() {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null);

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    setSelectedFilter(value);
  };

  const handleStartDateChange = (value: dayjs.Dayjs | null) => {
    setStartDate(value);
  };

  const handleEndDateChange = (value: dayjs.Dayjs | null) => {
    setEndDate(value);
  };

  const handleResetFilters = () => {
    setSelectedFilter('');
    setSearchValue('');
    setSelectedStatus('Все');
    setStartDate(null);
    setEndDate(null);
  };

  const renderFilterComponents = () => {
    switch (selectedFilter) {
      case 'Новенькие':
        return <ContentNewAmba />;
      case 'В процессе':
        return <ContentInProcessAmba />;
      case 'Выполнено':
        return <ContentSuccessAmba />;
      default:
        return <ContentAllAmba />;
    }
  };

  return (
    <div className="content__filter">
      <div className="content__filter-select">
        <ContentSearch
          label="ФИО амбассадора"
          placeholder="Введите ФИО"
          width="320px"
          margin="0 8px 0 0"
          valueSearch={searchValue}
          setValueSearch={setSearchValue}
        />
        <FilterSelectGrey
          label="Выберите статус"
          width="188px"
          height="40px"
          margin="0 8px 0 0"
          placeholder="Все"
          fontSize="14px"
          options={['Все', 'Новенькие', 'В процессе', 'Выполнено']}
          onChange={handleStatusChange}
          valueSelectFilter={selectedStatus}
        />
        <InputDate
          label="От"
          width="272px"
          height="40px"
          margin="0 8px 0 0"
          valueDate={startDate}
          setValueDate={handleStartDateChange}
        />
        <InputDate
          label="До"
          width="272px"
          height="40px"
          margin="0 8px 0 0"
          valueDate={endDate}
          setValueDate={handleEndDateChange}
        />
      </div>
      <ResetFilters margin="0 0 24px" onResetFilters={handleResetFilters} />
      {renderFilterComponents()}
    </div>
  );
}
