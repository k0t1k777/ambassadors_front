import "./Sending.css";
import TableSending from "../Table/TableSending/TableSending";
import PaginationBtn from "../../Btns/PaginationBtn/PaginationBtn";
import SubmitBtn from "../../Btns/SubmitBtn/SubmitBtn";
import SendingFilter from "./SendingFilter/SendingFilter";
import { useEffect, useState } from "react";

export interface SendingMerch {
  address: string;
  ambassador: string;
  city: string;
  country: string;
  created: string;
  index: number;
  merch: string;
  phone: number;
  size: string;
}
export interface SendingProp {
  sending: SendingMerch[];
}

export default function Sending({ sending }: SendingProp) {
  const [showSending, setShowSending] = useState(sending);
  const handleClearFilters = () => {
    setShowSending(sending);
  };

  useEffect(() => {
    setShowSending(sending);
  }, [sending]);

  return (
    <div className="sending">
      <div className="sending__filters">
        <SendingFilter onResetFilters={handleClearFilters}/>
        <SubmitBtn
          title="Отправить"
          width="149px"
          height="40px"
          fontSize="14px"
          margin="32px 0 28px auto"
        />
      </div>
      <div className="sending__table">
        <TableSending item={showSending}/>
      </div>
      <div className="sending__btnSelected">
        <PaginationBtn />
      </div>
    </div>
  );
}
