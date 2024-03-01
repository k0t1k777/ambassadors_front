import './PromocodeHeadline.css';
// interface PromocodeHeadlineProps = {

// };
export default function PromocodeHeadline() {
  return (
    <div className='promocode__description'>
      <p className='promocode__text promocode-name'>Имя амбассадора</p>
      <p className='promocode__text telegram'>Телеграмм</p>
      <p className='promocode__text promocode-text'>Промокод</p>
      <p className='promocode__text promocode-registration'>Дата регистрации</p>
      <p className='promocode__text promocode-status'>Статус</p>
      {/* <p className='promocode__text'></p> */}
    </div>
  );
}
