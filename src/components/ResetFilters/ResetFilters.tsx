import DeleteIcon from '../../assets/DeleteIcon.svg?react';
import './ResetFilters.css';

export default function ResetFilters() {
  return (
    <div className='reset-filters'>
      <DeleteIcon className='reset-filters__icon' />
      <p className='reset-filters__text'>Очистить фильтры</p>
    </div>
  );
}
