import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface BtnSubmitProps {
  title: string;
  width?: string;
  height?: string;
  fontSize?: string;
  icon?: ReactNode;
}

export default function BtnSubmit({ title, width, height, icon, fontSize }: BtnSubmitProps) {
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
        '&:focus': {
          outline: 'none'
        },
        width: width,
        height: height,
        fontSize: fontSize,
        textTransform: 'none'
      }}
      disableElevation
      startIcon={icon}
    >
      {title}
    </Button>
  );
}
