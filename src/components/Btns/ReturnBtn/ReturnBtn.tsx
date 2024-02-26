import { Button } from '@mui/material';
import LeftArrow from '../../../assets/LeftArrow.svg?react';

export const ReturnBtn = () => {
  return (
    <div className='returnBtn'>
      <LeftArrow />
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
      >
        Вернуться к списку амбассадоров
      </Button>
    </div>
  );
};
