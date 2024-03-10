import FilterSelectGrey from '../../../FilterSelectGrey/FilterSelectGrey';
import ContentSearch from '../ContentSearch/ContentSearch';
import { useState } from 'react';
import './ContentFilter.css';
import ContentAllAmba from '../ContentAllAmba/ContentAllAmba';
import ResetFilters from '../../../ResetFilters/ResetFilters';
import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
import { ContentData } from '../../../../utils/constants';
import InputDateRange from '../../../InputDateRange/InputDateRange';
import dayjs from 'dayjs';

interface ContentFilterProps {
  onChange?: (category: string) => void;
  date: any;
  inputValue: string;
  setInputValue: any;
  setSelectedCategory: any;
  setDate: any;
}

export default function ContentFilter({
  onChange,
  date,
  setDate,
  inputValue,
  setInputValue,
  setSelectedCategory,
}: ContentFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  console.log(searchValue);
  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    setSelectedFilter(value);
    if (onChange) onChange(value);
  };

  const handleResetFilters = () => {
    setSelectedFilter('');
    setSearchValue('');
    setSelectedStatus('Все');
    setSelectedCategory('Все');
    setDate([dayjs('2024-01-01'), dayjs()]);
  };

  const renderFilterComponents = () => {
    switch (selectedFilter) {
      case 'Новенькие':
        console.log('new');
        return (
          <ContentSortWindow width='700'>
            <p className='content__title-status'>{ContentData.new}</p>
          </ContentSortWindow>
        );
      case 'В процессе':
        console.log('proc');
        return (
          <ContentSortWindow width='1286'>
            <p className='content__title-status'>{ContentData.inProcess}</p>
          </ContentSortWindow>
        );
      case 'Выполнено':
        console.log('succs');
        return (
          <ContentSortWindow width='700'>
            <p className='content__title-status'>{ContentData.done}</p>
          </ContentSortWindow>
        );
      default:
        return <ContentAllAmba />;
    }
  };

  return (
    <div className='content__filter'>
      <div className='content__filter-select'>
        <ContentSearch
          label='ФИО амбассадора'
          placeholder='Поиск амбассадора'
          width='320px'
          margin='0 8px 0 0'
          valueSearch={inputValue}
          setValueSearch={setInputValue}
        />
        <FilterSelectGrey
          label='Выберите статус'
          width='188px'
          height='40px'
          margin='4px 8px 0 0'
          placeholder='Все'
          fontSize='14px'
          options={['Все', 'Новенькие', 'В процессе', 'Выполнено']}
          onChange={handleStatusChange}
          valueSelectFilter={selectedStatus}
          setValueSelectFilter={setSelectedStatus}
        />
        <InputDateRange
          height='40px'
          width='272px'
          value={date}
          setValue={setDate}
        />
      </div>
      <ResetFilters margin='0 0 24px' onResetFilters={handleResetFilters} />
      {renderFilterComponents()}
    </div>
  );
}
