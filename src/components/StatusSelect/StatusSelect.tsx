import { useState } from 'react';
import './StatusSelect.css';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import StatusArrowGreen from '../../assets/StatusArrowGreen.svg';
import StatusArrowRed from '../../assets/StatusArrowRed.svg';
import StatusArrowOrange from '../../assets/StatusArrowOrange.svg';
import StatusArrowViolet from '../../assets/StatusArrowViolet.svg';
import { StatusSelectData } from '../../utils/constants';

interface StatusBtnProps {
  value?: string;
  onChange?: (value: string) => void;
  width?: string;
  height?: string;
}

export default function StatusSelect({ value, onChange, width, height }: StatusBtnProps) {
  const [selectColor, setSelectColor] = useState(value || 'active');
  const [openSelect, setOpenSelect] = useState(false);

  const handleChange = (evt: SelectChangeEvent<string>) => {
    setSelectColor(evt.target.value);
    if (onChange) {
      onChange(evt.target.value);
    }
  };

  const toggleSelect = () => {
    setOpenSelect(!openSelect);
  };

  return (
    <FormControl>
      <div style={{ position: 'relative' }}>
        <Select
          value={selectColor}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select option' }}
          IconComponent={() => null}
          onClose={() => setOpenSelect(false)}
          onClick={toggleSelect}
          open={openSelect}
          endAdornment={
            <img
              src={
                selectColor === 'active'
                  ? StatusArrowGreen
                  : selectColor === 'notAmba'
                  ? StatusArrowRed
                  : selectColor === 'pause'
                  ? StatusArrowOrange
                  : selectColor === 'precise'
                  ? StatusArrowViolet
                  : StatusArrowGreen
              }
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
            border: selectColor === '' ? '1px solid #87CC9E' : '1px solid',
            borderColor:
              selectColor === 'active'
                ? '#87CC9E'
                : selectColor === 'notAmba'
                ? '#F27C7B'
                : selectColor === 'pause'
                ? '#FFB55B'
                : selectColor === 'precise'
                ? '#7F67D2'
                : 'inherit',
            color:
              selectColor === 'active'
                ? '#87CC9E'
                : selectColor === 'notAmba'
                ? '#F27C7B'
                : selectColor === 'pause'
                ? '#FFB55B'
                : selectColor === 'precise'
                ? '#7F67D2'
                : 'inherit',
            width: width ? width : '184px',
            height: height ? height : '50px'
          }}
        >
          <MenuItem value="active">{StatusSelectData.active}</MenuItem>
          <MenuItem value="notAmba">{StatusSelectData.notAmba}</MenuItem>
          <MenuItem value="pause">{StatusSelectData.pause}</MenuItem>
          <MenuItem value="precise">{StatusSelectData.precise}</MenuItem>
        </Select>
      </div>
    </FormControl>
  );
}
