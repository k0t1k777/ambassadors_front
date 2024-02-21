import Button from '@mui/material/Button';

interface BtnSubmitProps {
  title: string;
  width?: string;
  height?: string; // Указываем тип TS
}

function BtnSubmit({ title, width, height }: BtnSubmitProps) {
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
    >
      {title}
    </Button>
  );
}

export default BtnSubmit;
