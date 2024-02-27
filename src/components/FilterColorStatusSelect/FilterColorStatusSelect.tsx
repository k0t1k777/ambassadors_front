import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import StatusArrowGreen from '../../assets/StatusArrowGreen.svg';
import StatusArrowRed from '../../assets/StatusArrowRed.svg';
import StatusArrowOrange from '../../assets/StatusArrowOrange.svg';
import StatusArrowViolet from '../../assets/StatusArrowViolet.svg';
import { StatusSelectData } from '../../utils/constants';

interface FilterColorStatusSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  width?: string;
  height?: string;
}

export default function FilterColorStatusSelect({
  value,
  onChange,
  width,
  height,
}: FilterColorStatusSelectProps) {
  const [selectColor, setSelectColor] = useState(value || 'active');
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const handleChange = (evt: SelectChangeEvent<string>) => {
    setSelectColor(evt.target.value);
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
          border: 'none',
        },
      }}
    >
      <div style={{ position: 'relative' }}>
        <Select
          value={selectColor}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select option' }}
          IconComponent={() => null}
          onClose={() => setIsOpenSelect(false)}
          onClick={toggleSelect}
          open={isOpenSelect}
          endAdornment={
            <img
              src={
                selectColor === 'active'
                  ? StatusArrowGreen
                  : selectColor === 'not_ambassador'
                  ? StatusArrowRed
                  : selectColor === 'paused'
                  ? StatusArrowOrange
                  : selectColor === 'precise'
                  ? StatusArrowViolet
                  : StatusArrowGreen
              }
              alt='Arrow icon'
              onClick={toggleSelect}
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '50%',
                right: '8px',
                transform: 'translateY(-50%)',
              }}
            />
          }
          sx={{
            padding: '0',
            border: selectColor === '' ? '1px solid #87CC9E' : '1px solid',
            borderColor:
              selectColor === 'active'
                ? '#87CC9E'
                : selectColor === 'not_ambassador'
                ? '#F27C7B'
                : selectColor === 'paused'
                ? '#FFB55B'
                : selectColor === 'precise'
                ? '#7F67D2'
                : 'inherit',
            color:
              selectColor === 'active'
                ? '#87CC9E'
                : selectColor === 'not_ambassador'
                ? '#F27C7B'
                : selectColor === 'paused'
                ? '#FFB55B'
                : selectColor === 'precise'
                ? '#7F67D2'
                : 'inherit',
            width: width ? width : '184px',
            height: height ? height : '50px',
          }}
        >
          <MenuItem value='active'>{StatusSelectData.active}</MenuItem>
          <MenuItem value='not_ambassador'>{StatusSelectData.notAmba}</MenuItem>
          <MenuItem value='paused'>{StatusSelectData.pause}</MenuItem>
          <MenuItem value='precise'>{StatusSelectData.precise}</MenuItem>
        </Select>
      </div>
    </FormControl>
  );
}
