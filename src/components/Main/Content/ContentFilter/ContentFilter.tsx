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
import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
import { ContentData } from '../../../../utils/constants';

interface ContentFilterProps {
  onChange?: (category: string) => void;
}

export default function ContentFilter({ onChange }: ContentFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null);

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    setSelectedFilter(value);
    if (onChange) onChange(value);
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
        console.log('new');
        return (
          <div>
            <ContentSortWindow width="700">
              <p className="content__title-status">{ContentData.new}</p>
            </ContentSortWindow>
          </div>
        );
      case 'В процессе':
        console.log('proc');
        return (
          <div>
            <ContentSortWindow width="1286">
              <p className="content__title-status">{ContentData.inProcess}</p>
            </ContentSortWindow>
          </div>
        );
      case 'Выполнено':
        console.log('succs');
        return (
          <div>
            <ContentSortWindow width="700">
              <p className="content__title-status">{ContentData.done}</p>
            </ContentSortWindow>
          </div>
        );
      default:
        return <ContentAllAmba />;
    }
  };

  return (
    <div className="content__filter">
      <div className="content__filter-select">
        <ContentSearch
          label="ФИО амбассадора"
          placeholder="Поиск амбассадора"
          width="320px"
          margin="0 8px 0 0"
          valueSearch={searchValue}
          setValueSearch={setSearchValue}
        />
        <FilterSelectGrey
          label="Выберите статус"
          width="188px"
          height="40px"
          margin="4px 8px 0 0"
          placeholder="Все"
          fontSize="14px"
          options={['Все', 'Новенькие', 'В процессе', 'Выполнено']}
          onChange={handleStatusChange}
          valueSelectFilter={selectedStatus}
          setValueSelectFilter={setSelectedStatus}
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
