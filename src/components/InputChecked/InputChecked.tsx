import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface InputCheckedProps {
  value: boolean;
  handleCheckedChange: () => void;
}

export default function InputChecked({
  value,
  handleCheckedChange,
}: InputCheckedProps) {
  return (
    <Checkbox
      sx={{
        color: 'black',
        '&.Mui-checked': {
          color: 'black',
        },
      }}
      {...label}
      checked={value}
      onChange={() => handleCheckedChange()}
    />
  );
}
