import { TextField, InputLabel, Box } from '@mui/material';

interface InputProps {
  label: string;
  value?: string;
  width?: string;
  height?: string;
  placeholder?: string;
}

function CustomInput({ label, value, width, height, placeholder }: InputProps) {
  return (
    <Box sx={{ width: width, height: height }}>
      <InputLabel>{label}</InputLabel>
      <TextField value={value} placeholder={placeholder} sx={{ height: height }} />
    </Box>
  );
}

export default CustomInput;
