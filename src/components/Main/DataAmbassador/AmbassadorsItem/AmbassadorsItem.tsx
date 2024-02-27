import { useEffect, useState } from 'react';
import FilterColorStatusSelect from '../../../FilterColorStatusSelect/FilterColorStatusSelect';
import InputChecked from '../../../InputChecked/InputChecked';
import { Ambassador } from '../DataAmbassador';
import './AmbassadorsItem.css';

interface AmbassadorsItemProps {
  name: string;
  sex: string;
  created: string;
  status: string;
  country: string;
  city: string;
  onboarding: boolean;
  item: Ambassador;
  setSelectedItem: (item: Ambassador) => void;
  setAmbassadorFieldsIsOpen: (x: boolean) => void;
}

export default function AmbassadorsItem({
  name,
  sex,
  created,
  status,
  country,
  city,
  onboarding,
  item,
  setSelectedItem,
  setAmbassadorFieldsIsOpen,
}: AmbassadorsItemProps) {
  const [checked, setChecked] = useState(onboarding);
  const [date, setDate] = useState(created);
  const handleCheckedChange = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  //console.log(checked);

  useEffect(() => {
    const dateObj = new Date(created);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    setDate(`${day}.${month}.${year}`);
  }, [created]);

  return (
    <li
      className='ambassadors__item'
      onClick={(e) => (
        console.log(e.target),
        setSelectedItem(item),
        setAmbassadorFieldsIsOpen(true)
      )}
    >
      <p className='ambassadors__text name'>{name}</p>
      <p className='ambassadors__text sex'>{sex === 'w' ? 'Ж' : 'М'}</p>
      <p className='ambassadors__text registration'>{date}</p>
      <div className='ambassadors__text status'>
        <FilterColorStatusSelect value={status} />
      </div>
      <p className='ambassadors__text country'>{country}</p>
      <p className='ambassadors__text name'>{city}</p>
      <p className='ambassadors__text name'>Направление</p>
      <InputChecked
        value={checked}
        handleCheckedChange={() => handleCheckedChange()}
      />
    </li>
  );
}
