import './BudjetFilter.css';
import ResetFilters from '../../../ResetFilters/ResetFilters';
import InputDateRange from '../../../InputDateRange/InputDateRange';
import dayjs from 'dayjs';

interface BudjetFilterProps {
  sum: string;
  onResetFilters: () => void;
  date: any;
  setDate: any;
}

export default function BudjetFilter({ sum, date, setDate }: BudjetFilterProps) {
  const handleResetFilters = () => {
    setDate([dayjs('2024-01-01'), dayjs()]);
  };

  return (
    <div>
      <div className="budjet__filter-select">
        <InputDateRange height="40px" width="272px" value={date} setValue={setDate} />
        <div className="budjet__filter-container">
          <p className="budjet__filter-name">Бюджет на мерч</p>
          <div className="budjet__filter-total">
            <p className="budjet__filter-total-cifer">{sum}</p>
          </div>
        </div>
      </div>
      <ResetFilters margin="0 0 24px0" onResetFilters={handleResetFilters} />
    </div>
  );
}
