import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface SubmitBtnProps {
  title: string;
  width: string;
  height: string;
  fontSize?: string;
  margin?: string;
  color?: string;
  icon?: ReactNode;
}

export default function SubmitBtn({
  title,
  width,
  height,
  icon,
  fontSize,
  margin,
  color
}: SubmitBtnProps) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#23272E',
        color: color ? color : '#fff',
        border: 'none',
        '&:hover': {
          backgroundColor: '#404651'
        },
        '&:focus': {
          outline: 'none'
        },
        width: width,
        height: height,
        fontSize: fontSize ? fontSize : '16px',
        textTransform: 'none',
        margin: margin ? margin : '0'
      }}
      disableElevation
      startIcon={icon}
    >
      {title}
    </Button>
  );
}
