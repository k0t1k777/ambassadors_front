import dayjs from 'dayjs';
import ContentSearch from '../../../Main/Content/ContentSearch/ContentSearch';
import { useState } from 'react';
import './ProgramFilter.css';
import ResetFilters from '../../../ResetFilters/ResetFilters';
import InputDateRange from '../../../InputDateRange/InputDateRange';

export default function ProgramFilter({
  date,
  setDate,
  inputValue,
  setInputValue,
}: any) {
  return (
    <div>
      <div className='program__filter-select'>
        <ContentSearch
          label='ФИО амбассадора'
          placeholder='Поиск амбассадора'
          width='320px'
          margin='0 8px 0 0'
          valueSearch={inputValue}
          setValueSearch={setInputValue}
        />
        <InputDateRange
          height='40px'
          width='272px'
          value={date}
          setValue={setDate}
        />
      </div>
      <ResetFilters margin='0 0 24px' />
    </div>
  );
}
