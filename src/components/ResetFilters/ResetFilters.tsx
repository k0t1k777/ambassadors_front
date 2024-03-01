import DeleteIcon from '../../assets/DeleteIcon.svg?react';
import './ResetFilters.css';

interface ResetFiltersProps {
  handleClearFilters?: () => void
}

export default function ResetFilters({handleClearFilters}: ResetFiltersProps) {
  return (
    <button className='reset-filters' type='button' onClick={handleClearFilters}>
      <DeleteIcon className='reset-filters__icon' />
      <p className='reset-filters__text'>Очистить фильтры</p>
    </button>
  );
}
