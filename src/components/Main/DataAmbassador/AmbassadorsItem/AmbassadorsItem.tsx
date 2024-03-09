import { useEffect, useState } from 'react';
import FilterColorStatusSelect from '../../../FilterColorStatusSelect/FilterColorStatusSelect';
import InputChecked from '../../../InputChecked/InputChecked';
import { Ambassador } from '../DataAmbassador';
import './AmbassadorsItem.css';
import * as Api from '../../../../utils/utils';
import InfoTooltip from '../../../InfoTooltipDone/InfoTooltipDone';

interface AmbassadorsItemProps {
  item: Ambassador;
  setSelectedItem: (item: Ambassador) => void;
  setAmbassadorFieldsIsOpen: (x: boolean) => void;
}

export default function AmbassadorsItem({
  item,
  setSelectedItem,
  setAmbassadorFieldsIsOpen
}: AmbassadorsItemProps) {
  const [checked, setChecked] = useState(item.onboarding_status);
  const [date, setDate] = useState(item.created);
  const handleCheckedChange = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  const [status, setStatus] = useState(item.status);
  const [infoTooltipIsOpen, setInfoTooltipIsOpen] = useState(false);

  const handleStatusChange = newValue => {
    setStatus(newValue); // обновление состояния статуса
    setInfoTooltipIsOpen(true); // открытие попапа
  };

  useEffect(() => {
    Api.updateAmbassadorStatus(status, item.id);
  }, [status]);

  useEffect(() => {
    Api.updateAmbassadorOnboarding(checked, item.id);
  }, [checked]);

  useEffect(() => {
    const dateObj = new Date(item.created);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    setDate(`${day}.${month}.${year}`);
  }, [item.created]);

  return (
    <li className="ambassadors__item">
      <p
        className="ambassadors__text name"
        onClick={() => (setSelectedItem(item), setAmbassadorFieldsIsOpen(true))}
      >
        {item.name}
      </p>
      <p
        className="ambassadors__text sex"
        onClick={() => (setSelectedItem(item), setAmbassadorFieldsIsOpen(true))}
      >
        {item.sex === 'w' ? 'Ж' : 'М'}
      </p>
      <p
        className="ambassadors__text registration"
        onClick={() => (setSelectedItem(item), setAmbassadorFieldsIsOpen(true))}
      >
        {date}
      </p>
      <div className="ambassadors__text status">
        <FilterColorStatusSelect value={status} onChange={handleStatusChange} />
      </div>
      <InfoTooltip isVisible={infoTooltipIsOpen} messageTitle="Статус изменен" />

      <p
        className="ambassadors__text country"
        onClick={() => (setSelectedItem(item), setAmbassadorFieldsIsOpen(true))}
      >
        {item.country}
      </p>
      <p
        className="ambassadors__text name"
        onClick={() => (setSelectedItem(item), setAmbassadorFieldsIsOpen(true))}
      >
        {item.city}
      </p>
      <p
        className="ambassadors__text name"
        onClick={() => (setSelectedItem(item), setAmbassadorFieldsIsOpen(true))}
      >
        {item.course === null ? '' : item.course.title}
      </p>
      <InputChecked value={checked} handleCheckedChange={() => handleCheckedChange()} />
    </li>
  );
}
