import './ProgramFilter.css';
import ResetFilters from '../../../ResetFilters/ResetFilters';
import InputDateRange from '../../../InputDateRange/InputDateRange';
import InputWithIcon from '../../../InputWithIcon/InputWithIcon';
import dayjs from 'dayjs';

export default function ProgramFilter({ date, setDate, inputValue, setInputValue }: any) {
  const handleResetFilters = () => {
    setInputValue('');
    setDate([dayjs('2024-01-01'), dayjs()]);
  };
  return (
    <div>
      <div className="program__filter-select">
        <InputWithIcon
          width="276px"
          placeholder="Поиск амбассадора"
          value={inputValue}
          setValue={e => setInputValue(e.target.value)}
          margin="0 8px 0  0"
        />
        <InputDateRange height="40px" width="272px" value={date} setValue={setDate} />
      </div>
      <ResetFilters margin="0 0 24px 15px" onResetFilters={handleResetFilters} />
    </div>
  );
}
