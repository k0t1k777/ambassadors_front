import './ContentChecked.css';
import Checkbox from '../../../../assets/Checkbox.svg?react';
import { useState } from 'react';

interface ContentCheckedProps {
  value?: boolean;
  handleCheckedChange?: () => void;
  incrementCount?: () => void;
}

export default function ContentChecked({
  value,
  handleCheckedChange,
  incrementCount
}: ContentCheckedProps) {
  const [clicked, setClicked] = useState(false);

  const handleCheckboxClick = () => {
    console.log('checkbox click');
    if (!clicked && incrementCount) {
      incrementCount();
      setClicked(true);
    }
  };

  return (
    <label className="checkbox" onClick={handleCheckboxClick}>
      <input
        className="checkbox__input hidden"
        type="checkbox"
        checked={value}
        onChange={handleCheckedChange}
      />
      <Checkbox className="checkbox__input-checked checkbox__input-checked-on" />
      <div className="checkbox__input-checked"></div>
    </label>
  );
}
