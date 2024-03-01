import './InputChecked.css';
import Checkbox from '../../assets/Checkbox.svg?react';

interface InputCheckedProps {
  value?: boolean;
  handleCheckedChange?: () => void;
}

export default function InputChecked({ value, handleCheckedChange }: InputCheckedProps) {
  return (
    <label className="checkbox">
      <input
        className="checkboxinput hidden"
        type="checkbox"
        checked={value}
        onChange={handleCheckedChange}
      />
      <Checkbox className="checkboxinput-checked checkboxinput-checked-on" />
      <div className="checkboxinput-checked"></div>

    </label>
  );
}