import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface SubmitBtnProps {
  title?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  margin?: string;
  color?: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function SubmitBtn({
  title,
  width,
  height,
  icon,
  fontSize,
  margin,
  color,
  onClick,
  disabled
}: SubmitBtnProps) {
  return (
    <Button
      variant="contained"
      sx={{
        fontFamily: 'YsText',
        fontWeight: '400',
        backgroundColor: '#23272E',
        color: color ? color : '#fff',
        border: 'none',
        borderRadius: '6px',
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
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
}
