import './PromocodeHeadline.css';
// interface PromocodeHeadlineProps = {

// };
export default function PromocodeHeadline({ archiveIsOpen }: any) {
  return (
    <div className='promocode__description'>
      <p className='promocode__text promocode-name'>Имя амбассадора</p>
      <p className='promocode__text telegram'>Телеграмм</p>
      <p className='promocode__text promocode__text_promo'>Промокод</p>
      <p className='promocode__text promocode-registration'>
        {archiveIsOpen ? 'Дата изменения' : 'Дата регистрации'}
      </p>
      <p className='promocode__text promocode-status'>
        {archiveIsOpen ? 'Дата регистрации' : 'Статус'}
      </p>
      {archiveIsOpen && <p className='promocode__text'>Статус</p>}
    </div>
  );
}
