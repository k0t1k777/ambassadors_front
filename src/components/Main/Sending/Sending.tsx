import './Sending.css';
import TableSending from '../Table/TableSending';
import PaginationBtn from '../../Btns/PaginationBtn/PaginationBtn';
import Header from '../../Header/Header';
import InputWithIcon from '../../InputWithIcon/InputWithIcon';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import ResetFilters from '../../ResetFilters/ResetFilters';

export default function Sending() {
  // const [ambassadorFieldsIsOpen, setAmbassadorFieldsIsOpen] = useState(false);

  // const handleIsOpen = () => {
  //   ambassadorFieldsIsOpen
  //     ? (setAmbassadorFieldsIsOpen(false), setSelectedItem(undefined))
  //     : setAmbassadorFieldsIsOpen(true);
  // };
  return (
    <div className='sending'>
      <div className='sending__container-search'>
        <InputWithIcon width='320px' placeholder='Поиск амбассадора' />
        <SubmitBtn
          title='Отправить'
          width='149px'
          height='40px'
          fontSize='14px'
          margin='32px 0 28px auto'
          // onClick={() => {
          //   handleIsOpen();
          // }}
        />
      </div>
      <div className='sending__filters'>
        {/* <Filters /> */}
        <ResetFilters />
      </div>
      <div className='sending__table'>
        <TableSending />
      </div>
      <div className='sending__btnSelected'>
        <PaginationBtn />
      </div>
    </div>
  );
}
