import FilterColorStatusSelect from '../../../FilterColorStatusSelect/FilterColorStatusSelect';
import './PromocodeItem.css';

// type Props = {

// };
export default function PromocodeItem() {
  return (
    <li className='promocode__item'>
      <div className='promocode__text promocode-name'>
        <p className='promocode__text'>Имя амбассадора</p>
        <p className='promocode__text direction'>Направление</p>
      </div>
      <p className='promocode__text telegram'>Телеграмм</p>
      <p className='promocode__text promocode-text'>Промокод</p>
      <p className='promocode__text promocode-registration'>Дата регистрации</p>
      <FilterColorStatusSelect />
    </li>
  );
}
