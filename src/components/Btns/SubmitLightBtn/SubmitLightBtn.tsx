import Button from '@mui/material/Button';

interface SubmitLightBtnProps {
  title: string;
  width: string;
  height: string;
  color?: string;
  fontSize?: string;
  margin?: string;
  onClick?: () => void;
}

export default function SubmitLightBtn({
  title,
  width,
  height,
  color,
  fontSize,
  margin,
  onClick
}: SubmitLightBtnProps) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#fff',
        color: color ? color : '#000',
        border: '1px solid #B5B5B7',
        '&:hover': {
          opacity: '.8',
          backgroundColor: '#fff',
          border: '1px solid #B5B5B7',
          outline: 'none'
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
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
