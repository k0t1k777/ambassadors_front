import DeleteIcon from '../../assets/DeleteIcon.svg?react';
import './ResetFilters.css';

export default function ResetFilters() {
  return (
    <button className='reset-filters' type='button'>
      <DeleteIcon className='reset-filters__icon' />
      <p className='reset-filters__text'>Очистить фильтры</p>
    </button>
  );
}
