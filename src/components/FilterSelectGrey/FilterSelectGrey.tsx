import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import StatusArrowGrey from '../../assets/StatusArrowGrey.svg';

interface FilterSelectGreyProps {
  onChange?: (value: string) => void;
  width?: string;
  height?: string;
  label?: string;
  options?: string[];
  defaultValue?: string;
}

export default function FilterSelectGrey({
  onChange,
  width,
  height,
  label,
  options = [],
  defaultValue = 'Выберите из списка'
}: FilterSelectGreyProps) {
  const [selectItem, setSelectItem] = useState(defaultValue);
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const handleChange = (evt: SelectChangeEvent<string>) => {
    setSelectItem(evt.target.value);
    if (onChange) {
      onChange(evt.target.value);
    }
  };

  const toggleSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  return (
    <FormControl
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          outline: 'none',
          border: 'none'
        }
      }}
    >
      <InputLabel
        sx={{
          color: ' #fff',
          fontSize: '13px',
          textAlign: 'start'
        }}
      >
        {label}
      </InputLabel>
      <Select
        value={selectItem}
        onChange={handleChange}
        displayEmpty
        renderValue={selected => (selected ? String(selected) : label)}
        inputProps={{ 'aria-label': 'Select option' }}
        IconComponent={() => null}
        onClose={() => setIsOpenSelect(false)}
        onClick={toggleSelect}
        open={isOpenSelect}
        endAdornment={
          <img
            src={StatusArrowGrey}
            alt="Arrow icon"
            onClick={toggleSelect}
            style={{
              cursor: 'pointer',
              position: 'absolute',
              top: '50%',
              right: '8px',
              transform: 'translateY(-50%)'
            }}
          />
        }
        sx={{
          padding: '0',
          border: '1px solid #DDE0E4',
          color: '#797981',
          width: width ? width : '184px',
          height: height ? height : '50px',
          marginTop: '8px'
        }}
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
