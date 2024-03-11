import './Promocode.css';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../Btns/SubmitLightBtn/SubmitLightBtn';
import ResetFilters from '../../ResetFilters/ResetFilters';
import PromocodeHeadline from './PromocodeHeadline/PromocodeHeadline';
import PromocodeItem from './PromocodeItem/PromocodeItem';
import { useEffect, useState } from 'react';
import FiltersPromocode from '../../FiltersPromocode/FiltersPromocode';
import * as Api from '../../../utils/utils';
import dayjs from 'dayjs';
import PaginationBtn from '../../Btns/PaginationBtn/PaginationBtn';
import InfoTooltipDone from '../../InfoTooltipDone/InfoTooltipDone';
import InfoTooltipError from '../../InfoTooltipError/InfoTooltipError';

export default function Promocode({
  promocodes,
  promocodesArchive,
  pagination,
}: any) {
  const [showPromocodes, setShowPromocodes] = useState<any>([]);
  const [archiveIsOpen, setArchiveIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClearFilters = () => {
    console.log('clear');
    setInputValue('');
    setStatusSortValue('');
    setSortValue('');
    setShowPromocodes(promocodes);
  };

  useEffect(() => {
    setShowPromocodes(promocodes);
  }, [promocodes]);

  useEffect(() => {
    archiveIsOpen
      ? setShowPromocodes(promocodesArchive)
      : setShowPromocodes(promocodes);
  }, [archiveIsOpen]);

  useEffect(() => {
    if (inputValue !== '' && !archiveIsOpen) {
      console.log(inputValue);
      Api.getSearchPromos(inputValue).then((data) => {
        console.log(data);
        setShowPromocodes(data.results);
      });
    } else if (inputValue !== '' && archiveIsOpen) {
      Api.getSearchPromosArchive(inputValue).then((data) => {
        console.log(data);
        setShowPromocodes(data.results);
      });
    }
  }, [inputValue]);

  const [statusSortValue, setStatusSortValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [statusShowValue, setStatusShowValue] = useState('');
  const [sortShowValue, setShowValue] = useState('');

  useEffect(() => {
    if (sortValue === 'Сначала старые') {
      setShowValue('ambassador__created');
    } else if (sortValue === 'Сначала новые') {
      setShowValue('-ambassador__created');
    }
  }, [sortValue]);

  useEffect(() => {
    if (statusSortValue === 'Активный') {
      setStatusShowValue('active');
    } else if (statusSortValue === 'На паузе') {
      setStatusShowValue('paused');
    } else if (statusSortValue === 'Не амбассадор') {
      setStatusShowValue('not_ambassador');
    } else if (statusSortValue === 'Уточняется') {
      setStatusShowValue('pending');
    }
  }, [statusSortValue]);

  useEffect(() => {
    if (sortShowValue !== '' && !archiveIsOpen) {
      Api.getFilteredPromosOrder(sortShowValue).then((data) => {
        console.log(data);
        setShowPromocodes(data.results);
      });
    } else if (sortShowValue !== '' && archiveIsOpen) {
      Api.getFilteredPromosArchiveOrder(sortShowValue).then((data) => {
        console.log(data);
        setShowPromocodes(data.results);
      });
    }
  }, [sortShowValue, archiveIsOpen]);
      useEffect(() => {
    if (statusShowValue !== '' && !archiveIsOpen) {
      Api.getFilteredPromosAmbaStatus(statusShowValue).then((data) => {
        console.log(data);
        setShowPromocodes(data.results);
      });
    } else if (statusShowValue !== '' && archiveIsOpen) {
      Api.getFilteredPromosArchiveAmbaStatus(statusShowValue).then((data) => {
        console.log(data);
        setShowPromocodes(data.results);
      });
    }
  }, [statusShowValue, archiveIsOpen]);

  const [showDateBefore, setShowDateBefore] = useState<any>('');
  const [showDateAfter, setShowDateAfter] = useState<any>('');
  const [date, setDate] = useState([dayjs(), dayjs()]);
  useEffect(() => {
    setShowDateBefore(dayjs(date[1]).format('YYYY-MM-DD'));
    setShowDateAfter(dayjs(date[0]).format('YYYY-MM-DD'));
  }, [date]);

  useEffect(() => {
    if (
      showDateBefore !== dayjs().format('YYYY-MM-DD') &&
      showDateAfter !== dayjs().format('YYYY-MM-DD') &&
      !archiveIsOpen
    ) {
      Api.getFilteredPromosDateRange(showDateAfter, showDateBefore).then(
        (data) => {
          console.log(data);
          setShowPromocodes(data.results);
        }
      );
    } else if (
      showDateBefore !== dayjs().format('YYYY-MM-DD') &&
      showDateAfter !== dayjs().format('YYYY-MM-DD') &&
      archiveIsOpen
    ) {
      Api.getFilteredPromosArchiveDateRange(showDateAfter, showDateBefore).then(
        (data) => {
          console.log(data);
          setShowPromocodes(data.results);
        }
      );
    }
  }, [showDateBefore, showDateAfter, archiveIsOpen]);
  const [infoTooltipIsOpen, setInfoTooltipIsOpen] = useState(false);
  const [infoTooltipErrorIsOpen, setInfoTooltipErrorIsOpen] = useState(false);

  const handleUpdatePromo = async (promo: string, id: string) => {
    await Api.updateAmbassadorPromo(promo, id)
      .then(
        () => (
          setInfoTooltipIsOpen(true),
          setTimeout(() => {
            setInfoTooltipIsOpen(false);
          }, 3000)
        )
      )
      .catch(
        (err) => (
          console.log(err),
          setInfoTooltipErrorIsOpen(true),
          setTimeout(() => {
            setInfoTooltipErrorIsOpen(false);
          }, 3000)
        )
      );
  };
  const [page, setPage] = useState(1);

  console.log(page);

  useEffect(() => {
    Api.getDataPromosPage(page.toString()).then((res) =>
      setShowPromocodes(res.results)
    );
  }, [page, infoTooltipIsOpen]);

  console.log(showPromocodes);

  return (
    <div className='promocode'>
      <div className='promocode__container'>
        <div className='promocode__buttons'>
          {!archiveIsOpen && (
            <>
              <SubmitBtn
                width='203px'
                height='40px'
                title='Актуальные промокоды'
                fontSize='16px'
                onClick={() => setArchiveIsOpen(false)}
              />
              <SubmitLightBtn
                width='91px'
                height='40px'
                title='Архив'
                fontSize='16px'
                onClick={() => setArchiveIsOpen(true)}
              />
            </>
          )}
          {archiveIsOpen && (
            <>
              <SubmitLightBtn
                width='203px'
                height='40px'
                title='Актуальные промокоды'
                fontSize='14px'
                onClick={() => setArchiveIsOpen(false)}
              />
              <SubmitBtn
                width='91px'
                height='40px'
                title='Архив'
                fontSize='14px'
                onClick={() => setArchiveIsOpen(true)}
              />
            </>
          )}
        </div>
        <FiltersPromocode
          inputValue={inputValue}
          setInputValue={(e) => setInputValue(e.target.value)}
          sortValue={sortValue}
          setSortValue={setSortValue}
          statusSortValue={statusSortValue}
          setStatusSortValue={setStatusSortValue}
          date={date}
          setDate={setDate}
          archiveIsOpen={archiveIsOpen}
        />
        <ResetFilters onResetFilters={handleClearFilters} />
        <PromocodeHeadline archiveIsOpen={archiveIsOpen} />
        <ul className='promocode__items'>
          {!archiveIsOpen &&
            showPromocodes.map((item: any) => (
              <PromocodeItem
                item={item}
                key={item.id}
                name={item.name}
                course={item.course}
                telegram={item.telegram}
                promocode={item?.promo?.value}
                created={item.created}
                status={item.status}
                handleUpdatePromo={handleUpdatePromo}
              />
            ))}
          {archiveIsOpen &&
            showPromocodes.map((item: any) => (
              <PromocodeItem
                archiveIsOpen={archiveIsOpen}
                key={item.id}
                name={item.name}
                course={item.course}
                telegram={item.telegram}
                promocode={item.value}
                created={item.created}
                status={item.status}
                updated={item.updated}
                item={item}
              />
            ))}
        </ul>
      </div>
      <InfoTooltipDone
        isVisible={infoTooltipIsOpen}
        messageTitle='Промокод сохранен'
      />
      <InfoTooltipError
        isVisible={infoTooltipErrorIsOpen}
        messageTitle='Такой промокод уже существует'
      />
      <div className='pagination'>
        <PaginationBtn pagination={pagination} setPage={setPage} page={page} />
      </div>
    </div>
  );
}
