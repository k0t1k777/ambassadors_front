import './InputText.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputTextProps {
  width?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  setValue?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  margin?: string;
  padding?: string;
  borderColor?: string;
  height?: string;
  maxWidth?: string;
}

export default function InputText({
  width,
  placeholder,
  label,
  value,
  setValue,
  margin,
  padding,
  borderColor,
  height,
  maxWidth
}: InputTextProps) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: { width },
          maxWidth: maxWidth ? maxWidth : '371px',
          padding: { padding },
          margin: '0',
          boxSizing: 'border-box',
          outline: 'none'
        },
        '& .MuiInputBase-root': {
          m: 1,
          margin: '0',
          padding: { padding },
          cursor: 'pointer'
        },
        '& .MuiInputBase-input': {
          m: 1,
          padding: '0',
          margin: '0',
          '&:focus': {
            border: '0'
          }
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: { borderColor },
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: '.5px solid #E0E3E7'
          },
          '&:hover fieldset': {
            border: '.5px solid #B2BAC2'
          },
          '&.Mui-focused fieldset': {
            border: '1px solid #797981'
          }
        },
        margin: margin,
        height: height ? height : '40px',
        padding: { padding }
      }}
    >
      <div>
        <p className="label">{label}</p>
        <TextField
          id="outlined-size-normal"
          placeholder={placeholder}
          value={value}
          onChange={setValue}
          InputProps={{
            style: {
              fontFamily: 'YSText',
              fontSize: '14px',
              height: height ? height : '40px',
              padding: '12px',
              textDecoration: 'start'
            }
          }}
        />
      </div>
    </Box>
  );
}
