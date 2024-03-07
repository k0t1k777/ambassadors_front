import './ContentChecked.css';
import Checkbox from '../../../../assets/Checkbox.svg?react';
import { useState } from 'react';

interface ContentCheckedProps {
  value?: string;
  handleCheckedChange?: () => void;
  linkExists?: boolean;
  fileExists?: boolean;
  incrementCount?: () => void;
  decrementCount?: () => void;
}

export default function ContentChecked({
  value,
  incrementCount,
  decrementCount
}: ContentCheckedProps) {
  const [isChecked, setIsChecked] = useState<boolean>(!!value);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked && incrementCount) {
      incrementCount();
    } else if (isChecked && decrementCount) {
      decrementCount();
    }
  };

  return (
    <label className="checkbox">
      <input
        className="checkbox__input hidden"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        className={`checkbox__input-checked-on ${isChecked ? 'checkbox__input-checked' : ''}`}
      />
    </label>
  );
}
