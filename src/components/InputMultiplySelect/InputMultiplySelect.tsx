import { Theme, useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import Checkbox from '../../assets/Checkbox.svg?react';
import './InputMultiplySelect.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface InputMultiplySelectProps {
  width?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  setValue?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  options: [];
}

export default function InputMultiplySelect({
  options,
  label,
}: InputMultiplySelectProps) {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <p className='label'>{label}</p>
      <FormControl>
        <Select
          inputProps={{ 'aria-label': 'Select option' }}
          aria-label='label'
          renderValue={(selected) =>
            selected ? String(selected) : 'placeholder'
          }
          multiple
          value={personName}
          onChange={handleChange}
          MenuProps={MenuProps}
          sx={{
            width: '320px',
            height: '40px',
            '& .MuiInputBase-input': {
              padding: '0 0 0 12px',
              color: 'black',
              '& svg': {
                display: 'none',
              },
            },
            '& .MuiInputBase-root': {
              '& svg': {
                display: 'none',
              },
            },
          }}
        >
          {options.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, personName, theme)}
            >
              {item}
              {personName.includes(item) ? (
                <Checkbox className='check-icon' />
              ) : null}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
