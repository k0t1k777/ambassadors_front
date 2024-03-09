import { useEffect, useState } from 'react';
import FilterColorStatusSelect from '../../../FilterColorStatusSelect/FilterColorStatusSelect';
import './PromocodeItem.css';
import InputWithButtons from '../../../InputWithButtons/InputWithButtons';

export default function PromocodeItem({
  name,
  course,
  telegram,
  promocode,
  created,
  status,
  archiveIsOpen,
  updated,
}: any) {
  const [date, setDate] = useState(created);
  const [updatedDate, setUpdatedDate] = useState(updated);
  const [statusValue, setStatusValue] = useState(status);

  useEffect(() => {
    const dateObj = new Date(created);
    const day = String(dateObj.getDate());
    console.log(created, day);
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    setDate(`${day}.${month}.${year}`);
  }, [created]);

  useEffect(() => {
    const dateObj = new Date(updated);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    setUpdatedDate(`${day}.${month}.${year}`);
  }, [updated]);

  const [isEdited, setIsEdited] = useState(false);
  const [promocodeValue, setPromocodeValue] = useState('');

  // useEffect(() => {
  //   Api.updateAmbassadorStatus(statusValue, item.id);
  // }, [statusValue]);

  // console.log(statusValue);

  return (
    <li className='promocode__item'>
      <div className='promocode-text'>
        <p className='promocode__text promocode__text_name'>{name}</p>
        <p className='promocode__text promocode__text_name direction'>
          {course}
        </p>
      </div>
      <p className='promocode__text telegram'>{telegram}</p>
      <div className='promocode-promo'>
        {archiveIsOpen ? (
          <p className='promocode__text promocode__text_promo'>{promocode}</p>
        ) : !isEdited && !archiveIsOpen ? (
          <p
            className='promocode__text promocode__text_promo'
            onClick={() => setIsEdited(true)}
          >
            {promocode}
          </p>
        ) : (
          <InputWithButtons
            value={promocodeValue}
            setValue={(e) => setPromocodeValue(e.target.value)}
            resetInput={() => {
              setPromocodeValue(''), setIsEdited(false);
            }}
            updateData={() => console.log('update')}
            width={isEdited ? '159px' : '159px'}
            margin='0 44px 0 0'
          />
        )}
      </div>

      {!archiveIsOpen && (
        <>
          <p className='promocode__text promocode-registration'>{date}</p>
          <FilterColorStatusSelect
            value={statusValue}
            onChange={setStatusValue}
          />
        </>
      )}
      {archiveIsOpen && (
        <>
          <p className='promocode__text promocode-registration'>
            {updatedDate}
          </p>
          <p className='promocode__text promocode-registration'>{date}</p>
          <p className='promocode__text promocode-registration'>
            {status === 'active'
              ? 'Активный'
              : status === 'paused'
              ? 'На паузе'
              : status === 'not_ambassador'
              ? 'Не амбассадор'
              : 'Уточняется'}
          </p>
        </>
      )}
    </li>
  );
}
