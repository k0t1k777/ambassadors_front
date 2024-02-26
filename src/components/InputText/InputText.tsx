import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputTextProps {
  width?: string;
  placeholder?: string;
  label?: string;
}

export default function InputText({
  width,
  placeholder,
  label,
}: InputTextProps) {
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: { width },
          height: '40px',
          margin: '0',
        },
        '& .MuiInputBase-root': {
          m: 1,
          margin: '0',
          padding: '9px 0 9px 12px',
        },
        '& .MuiInputBase-input': {
          m: 1,
          padding: '0',
          margin: '0',
        },
      }}
    >
      <div>
        <p className='label'>{label}</p>
        <TextField id='outlined-size-normal' placeholder={placeholder} />
      </div>
    </Box>
  );
}
