import './InputChecked.css';
import Checkbox from '../../assets/Checkbox.svg?react';

interface InputCheckedProps {
  value?: boolean;
  handleCheckedChange?: () => void;
}

export default function InputChecked({
  value,
  handleCheckedChange,
}: InputCheckedProps) {
  return (
    <label className='checkbox'>
      <input
        className='checkbox__input hidden'
        type='checkbox'
        checked={value}
        onChange={handleCheckedChange}
      />
      <Checkbox className='checkbox__input-checked checkbox__input-checked-on' />
      <div className='checkbox__input-checked'></div>
    </label>
  );
}
