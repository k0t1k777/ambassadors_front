import './ReturnBtn.css';
import { Button } from '@mui/material';
import LeftArrow from '../../../assets/LeftArrow.svg?react';

interface ReturnBtnProps {
  onClick: () => void;
}

export const ReturnBtn = ({ onClick }: ReturnBtnProps) => {
  return (
    <Button
      variant='text'
      sx={{
        padding: '0',
        fontSize: '24px',
        fontWeight: '100',
        lineHeight: '32px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#000000',
        opacity: '85%',
        fontFamily: 'YSDisplay',
        textTransform: 'none',
        ':hover': {
          backgroundColor: '#fff',
        },
        ':focus': {
          outline: 'none',
        },
        ':active': {
          backgroundColor: '#fff',
        },
      }}
      onClick={() => onClick()}
    >
      <LeftArrow className='returnBtn' />
      Вернуться к списку амбассадоров
    </Button>
  );
};
