import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputContentTextProps {
  width?: string;
  margin?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  setValue?: (value: string) => void;
  onClick?: () => void;
  onChange?: (value: string) => void;
}

export default function InputContentText({
  width,
  placeholder,
  label,
  value,
  setValue,
  margin,
  onClick,
  onChange
}: InputContentTextProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (setValue) {
      setValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: { width },
          height: '40px',
          margin: '0'
        },
        '& .MuiInputBase-root': {
          m: 1,
          margin: '0',
          padding: '9px 0 9px 12px'
        },
        '& .MuiInputBase-input': {
          m: 1,
          padding: '0',
          margin: '0'
        },
        margin: margin,
        fontFamily: 'YSText'
      }}
    >
      <div>
        <p className="label">{label}</p>
        <TextField
          id="outlined-size-normal"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onClick={onClick}
        />
      </div>
    </Box>
  );
}
