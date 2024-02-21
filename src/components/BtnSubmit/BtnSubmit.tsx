import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface BtnSubmitProps {
  title: string;
  width?: string;
  height?: string;
  icon?: ReactNode; //TS
}

function BtnSubmit({ title, width, height, icon }: BtnSubmitProps) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#23272E',
        color: '#fff',
        border: 'none',
        '&:hover': {
          backgroundColor: '#404651'
        },
        width: width,
        height: height
      }}
      disableElevation
      startIcon={icon}
    >
      {title}
    </Button>
  );
}

export default BtnSubmit;
