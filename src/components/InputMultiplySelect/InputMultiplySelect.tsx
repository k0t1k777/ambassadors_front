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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

// interface InputMultiplySelectProps {
//   width?: string;
//   placeholder?: string;
//   label?: string;
//   value?: string;
//   setValue?: (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => void;
// }

export default function InputMultiplySelect() {
  //{
  //   width,
  //   placeholder,
  //   label,
  //   value,
  //   setValue,
  // }: InputMultiplySelectProps
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
      <p className='label'>{'label'}</p>
      <FormControl>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          MenuProps={MenuProps}
          sx={{
            width: '320px',
            height: '40px',
            '& .MuiInputBase-input': {
              padding: '0 0 0 12px',
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
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
              {personName.includes(name) ? (
                <Checkbox className='check-icon' />
              ) : null}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
