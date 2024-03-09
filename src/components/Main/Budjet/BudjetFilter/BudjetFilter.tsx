import dayjs from 'dayjs';
import InputDate from '../../../InputDate/InputDate';
import { useState } from 'react';
import './BudjetFilter.css';
import ResetFilters from '../../../ResetFilters/ResetFilters';
import InputDateRange from '../../../InputDateRange/InputDateRange';

interface BudjetFilterProps {
  sum: string;
  onResetFilters: () => void;
  date: any;
  setDate: any;
}

export default function BudjetFilter({
  sum,
  date,
  setDate,
}: BudjetFilterProps) {
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null);

  const handleStartDateChange = (value: dayjs.Dayjs | null) => {
    setStartDate(value);
  };

  const handleEndDateChange = (value: dayjs.Dayjs | null) => {
    setEndDate(value);
  };

  const handleResetFilters = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div>
      <div className='budjet__filter-select'>
        <InputDateRange
          height='40px'
          width='272px'
          value={date}
          setValue={setDate}
        />
        <div className='budjet__filter-container'>
          <p className='budjet__filter-name'>Бюджет на мерч</p>
          <div className='budjet__filter-total'>
            <p className='budjet__filter-total-cifer'>{sum}</p>
          </div>
        </div>
      </div>
      <ResetFilters margin='0 0 24px' onResetFilters={handleResetFilters} />
    </div>
  );
}
