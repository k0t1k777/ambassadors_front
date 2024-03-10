import Button from '@mui/material/Button';
import DeleteIcon from '../../assets/DeleteIcon.svg?react';
import './ResetFilters.css';
import { ResetFiltersData } from '../../utils/constants';

interface ResetFiltersProps {
  width?: string;
  margin?: string;
  onResetFilters?: () => void;
}

export default function ResetFilters({ width, margin, onResetFilters }: ResetFiltersProps) {
  return (
    <Button
      disableRipple
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
      onClick={onResetFilters}
      startIcon={<DeleteIcon className="reset__icon" />}
    >
      {ResetFiltersData.reset}
    </Button>
  );
}
