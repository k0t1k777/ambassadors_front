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
  height
}: InputTextProps) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: { width },
          maxWidth: '371px',
          height: { height },
          padding: { padding },
          margin: '0',
          boxSizing: 'border-box'
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
          margin: '0'
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: { borderColor },
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        margin: margin
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
              fontSize: '14px'
            }
          }}
        />
      </div>
    </Box>
  );
}
