import { useEffect, useState } from 'react';
import FilterColorStatucSelect from '../../../FilterColorStatucSelect/FilterColorStatucSelect';
import InputChecked from '../../../InputChecked/InputChecked';

interface AmbassadorsItemProps {
  name: string;
  sex: string;
  created: string;
  status: string;
  country: string;
  city: string;
  onboarding: boolean;
}

export default function AmbassadorsItem({
  name,
  sex,
  created,
  status,
  country,
  city,
  onboarding,
}: AmbassadorsItemProps) {
  const [checked, setChecked] = useState(onboarding);
  const [date, setDate] = useState(created);
  const handleCheckedChange = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  useEffect(() => {
    const dateObj = new Date(created);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    setDate(`${day}.${month}.${year}`);
  }, [created]);

  return (
    <li className='ambassadors__item'>
      <p className='ambassadors__text name'>{name}</p>
      <p className='ambassadors__text sex'>{sex === 'w' ? 'Ж' : 'М'}</p>
      <p className='ambassadors__text registration'>{date}</p>
      <div className='ambassadors__text status'>
        <FilterColorStatucSelect value={status} />
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
