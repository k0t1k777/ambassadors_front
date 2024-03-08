import "./Sending.css";
import TableSending from "../Table/TableSending/TableSending";
import PaginationBtn from "../../Btns/PaginationBtn/PaginationBtn";
import SubmitBtn from "../../Btns/SubmitBtn/SubmitBtn";
import SendingFilter from "./SendingFilter/SendingFilter";
import { useEffect, useState } from "react";
import * as Api from '../../../utils/utils';


export interface SendingMerch {
  address: string;
  name: string;
  city: string;
  country: string;
  created: string;
  index: number;
  merch: string;
  phone: number;
  size: string;
  current_user: string;
}
export interface SendingProp {
  sending: SendingMerch[];
}

export default function Sending({ sending }: SendingProp) {
  const [showSending, setShowSending] = useState(sending);
  // const [merchValue, setMerchValue] = useState<any>([]);
  // const [clotherValue, setClotherValue] = useState<any>([]);


  const handleClearFilters = () => {
    setShowSending(sending);
  };

  useEffect(() => {
    setShowSending(sending);
  }, [sending]);

  // const sendSelect = () => {
  //   // console.log('works');
  //   // console.log(newAmbassador);
  //   try {
  //     Api.postSending({merchValue: , clotherValue: });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
          // onClick={sendSelect}
        />
      </div>
      <div className="sending__table">
      <TableSending item={showSending}/>

        {/* <TableSending item={showSending} merchValue={merchValue} setMerchValue={setMerchValue} clotherValue={clotherValue} setClotherValue={setClotherValue}/> */}
      </div>
      <div className="sending__btnSelected">
        <PaginationBtn />
      </div>
    </div>
  );
}
