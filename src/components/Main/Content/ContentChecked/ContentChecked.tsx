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
  const [isChecked, setIsChecked] = useState<boolean>(!!value);

  console.log(isChecked);
  useEffect(() => {
    if (linkExists || fileExists) {
      setIsChecked(true);
    }
  }, [linkExists, fileExists]);

  const handleCheckboxClick = () => {
    setIsChecked(true);
    if (!isChecked && incrementCount) {
      incrementCount();
    } else if (isChecked && decrementCount) {
      decrementCount();
    }
  };

  return (
    <label className="checkbox" onClick={handleCheckboxClick}>
      <input
        className="checkbox__input hidden"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckedChange}
      />
      <Checkbox
        className={`checkbox__input-checked-on ${isChecked ? 'checkbox__input-checked' : ''}`}
      />
    </label>
  );
}
