import { Button } from '@mui/material';

interface BtnSubmitLightProps {
  title: string;
  width?: string;
  height?: string;
  color: string;
  fontSize?: string;
}

export default function BtnSubmitLight({
  title,
  width,
  height,
  color,
  fontSize
}: BtnSubmitLightProps) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#fff',
        color: color,
        border: '1px solid #B5B5B7',
        '&:hover': {
          backgroundColor: 'transparent'
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
    >
      {title}
    </Button>
  );
}
