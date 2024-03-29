import './Budjet.css';
import TableBudjet from '../Table/TableBudjet';
import PaginationBtn from '../../Btns/PaginationBtn/PaginationBtn';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import BudjetFilter from './BudjetFilter/BudjetFilter';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import * as Api from '../../../utils/utils';
import InfoTooltipDone from '../../InfoTooltipDone/InfoTooltipDone';
export interface BudjetMerch {
  id: string;
  name: string;
  total_1: number;
  total_2: number;
  total_3: number;
  total_4: number;
  total_5: number;
  total_6: number;
  total_7: number;
  total_8: number;
  total_9: number;
  total_10: number;
  total_11: number;
  total_12: number;
  total_delivery: number;
  total_per_amb: number;
}
export interface BudjetProp {
  budjet: BudjetMerch[];
  sum: string;
  pagination: any;
}

export default function Budjet({ budjet, sum, pagination }: BudjetProp) {
  const [showBudjet, setShowBudjet] = useState(budjet);
  const [showSum, setShowSum] = useState(sum);
  const [infoTooltipIsOpen, setInfoTooltipIsOpen] = useState(false);

  useEffect(() => {
    setShowBudjet(budjet);
    setShowSum(sum);
  }, [budjet, sum]);

  const handleClearFilters = () => {
    setShowBudjet(budjet);
  };

  const handleDownloadData = () => {
    const url = 'https://crm-ambassadors.hopto.org/api/v1/merch/download/';
    const link = document.createElement('a');
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setInfoTooltipIsOpen(true);
    setTimeout(() => {
      setInfoTooltipIsOpen(false);
    }, 3000);
  };

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
      showDateAfter !== dayjs().format('YYYY-MM-DD')
    ) {
      Api.getFilteredMerchDateRange(showDateAfter, showDateBefore).then(data => {
        console.log(data);
        setShowBudjet(data.results.data);
        setShowSum(data.results.grand_total);
      });
    }
  }, [showDateBefore, showDateAfter]);

  const [page, setPage] = useState(1);

  console.log(page);

  useEffect(() => {
    Api.getDataBudjetPage(page.toString()).then(res => setShowBudjet(res.results.data));
  }, [page]);

  console.log(pagination);

  return (
    <div className="budjet">
      <div className="budjet__filters">
        <BudjetFilter
          onResetFilters={handleClearFilters}
          sum={showSum}
          date={date}
          setDate={setDate}
        />
        <SubmitBtn
          title="Выгрузить данные"
          width="162px"
          height="40px"
          fontSize="14px"
          margin="20px 0 28px auto"
          onClick={handleDownloadData}
        />
        <InfoTooltipDone isVisible={infoTooltipIsOpen} messageTitle="Данные выгружены" />
      </div>
      <div className="budjet__table">
        <TableBudjet item={showBudjet} />
      </div>
      <div className="pagination">
        <PaginationBtn pagination={pagination} setPage={setPage} page={page} />
      </div>
    </div>
  );
}
