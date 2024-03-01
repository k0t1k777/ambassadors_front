// import DeleteIcon from '../../assets/DeleteIcon.svg?react';
// import './ResetFilters.css';

// export default function ResetFilters() {
//   return (
//     <button className='reset-filters' type='button'>
//       <DeleteIcon className='reset-filters__icon' />
//       <p className='reset-filters__text'>Очистить фильтры</p>
//     </button>
//   );
// }

import Button from '@mui/material/Button';
import DeleteIcon from '../../assets/DeleteIcon.svg?react';
import './ResetFilters.css';
import { ResetFiltersData } from '../../utils/constants';

interface ResetFiltersProps {
  width?: string;
  margin?: string;
  onResetFilters: () => void;
}

export default function ResetFilters({ width, margin, onResetFilters }: ResetFiltersProps) {
  const handleClick = () => {
    onResetFilters();
  };


interface ResetFiltersProps {
  handleClearFilters?: () => void
}

export default function ResetFilters({handleClearFilters}: ResetFiltersProps) {
  return (
    <button className='reset-filters' type='button' onClick={handleClearFilters}>
      <DeleteIcon className='reset-filters__icon' />
      <p className='reset-filters__text'>Очистить фильтры</p>
    </button>
  return (
    <Button
      sx={{
        textTransform: 'none',
        color: '#1A1B22',
        fontFamily: 'YSText',
        fontSize: '14px',
        fontWeight: '400',
        backgroundColor: 'inherit',
        '&:focus': {
          backgroundColor: 'inherit'
        },
        padding: '0',
        width: width ? width : '160px',
        margin: margin ? margin : '0  0 24px 16px'
      }}
      onClick={handleClick}
      startIcon={<DeleteIcon className="reset__icon" />}
    >
      {ResetFiltersData.reset}
    </Button>
  );
}
