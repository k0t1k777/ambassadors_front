import './InputText.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputTextProps {
  width?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  setValue?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function InputText({
  width,
  placeholder,
  label,
  value,
  setValue,
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
          cursor: 'pointer',
        },
        '& .MuiInputBase-input': {
          m: 1,
          padding: '0',
          margin: '0',
        },
      }}
    >
      <p className='label'>{label}</p>
      <TextField
        id='outlined-size-normal'
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      />
    </Box>
  );
}
