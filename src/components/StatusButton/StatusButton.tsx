import React, {ReactNode} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import '../StatusButton/StatusButton.css';
import Icon from '../../assets/Budget.svg';

interface StatusButtonProps {
    icon?: ReactNode; 
  }

function StatusButton({ icon }:StatusButtonProps) {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };

    const color = age === '' ? 'rgb(135, 204, 158)' : age === 'Pause' ? 'rgb(255, 181, 91)' : 'rgb(127, 103, 210)'; 
    
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
        IconComponent={Icon}
        sx={{ color: color, border: '1px solid ' + color}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
/*           SelectProps={{
            IconComponent: () => {Icon},
          }} */
        >
          <MenuItem value=""><em>Активный</em></MenuItem>
          <MenuItem value="Pause">На паузе</MenuItem>
          <MenuItem value="Confirmed">Уточняется</MenuItem>
        </Select>
      </FormControl>
      /* '.css-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {color: color}, '.css-bpeome-MuiSvgIcon-root-MuiSelect-icon' : {color: color} */
    );
  }
  
  export default StatusButton;