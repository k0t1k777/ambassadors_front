import './ContentChecked.css';
import Checkbox from '../../../../assets/Checkbox.svg?react';
import { useState, useEffect } from 'react';

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
  handleCheckedChange,
  linkExists = false,
  fileExists = false,
  incrementCount,
  decrementCount
}: ContentCheckedProps) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (linkExists || fileExists) {
      setIsChecked(true);
    }
  }, [linkExists, fileExists]);

  const handleCheckboxClick = () => {
    if (!isChecked && incrementCount) {
      incrementCount();
      setIsChecked(true);
    } else if (isChecked && decrementCount) {
      decrementCount();
      setIsChecked(false);
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
      <Checkbox
        className={`checkbox__input-checked-on ${isChecked ? 'checkbox__input-checked' : ''}`}
      />
    </label>
  );
}
