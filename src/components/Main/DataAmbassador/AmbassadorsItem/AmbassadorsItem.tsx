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
    <li className='ambassadors__item'>
      <p
        className='ambassadors__text name'
        onClick={() => (setSelectedItem(item), setAmbassadorFieldsIsOpen(true))}
      >
        {name}
      </p>
      <p
        className='ambassadors__text sex'
        onClick={() => (setSelectedItem(item), setAmbassadorFieldsIsOpen(true))}
      >
        {' '}
        {sex === 'w' ? 'Ж' : 'М'}
      </p>
      <p
        className='ambassadors__text registration'
        onClick={() => (setSelectedItem(item), setAmbassadorFieldsIsOpen(true))}
      >
        {date}
      </p>
      <div className='ambassadors__text status'>
        <FilterColorStatusSelect value={status} />
      </div>
      <p
        className='ambassadors__text country'
        onClick={() => (setSelectedItem(item), setAmbassadorFieldsIsOpen(true))}
      >
        {country}
      </p>
      <p
        className='ambassadors__text name'
        onClick={() => (setSelectedItem(item), setAmbassadorFieldsIsOpen(true))}
      >
        {city}
      </p>
      <p
        className='ambassadors__text name'
        onClick={() => (setSelectedItem(item), setAmbassadorFieldsIsOpen(true))}
      >
        Направление
      </p>
      <InputChecked
        value={checked}
        handleCheckedChange={() => handleCheckedChange()}
      />
    </li>
  );
}
