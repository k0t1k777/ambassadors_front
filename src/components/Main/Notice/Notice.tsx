import "./Notice.css";
import TableNotice from "../Table/TableNotice";
import PaginationBtn from "../../Btns/PaginationBtn/PaginationBtn";
import NoticeFilter from "./NoticeFilter/NoticeFilter";
// import { useEffect, useState } from "react";

export interface Notification {
  count: number;
}
// export interface NoticeProp {
//   notice: Notification[];
// }
export default function Notice() {

// export default function Notice({ notice }: NoticeProp) {
  // const [showNotice, setShowNotice] = useState(notice);
  // console.log('showNotice: ', notice);

  // useEffect(() => {
  //   setShowNotice(notice);
  // }, [notice]);

  // const handleClearFilters = () => {
  //   setShowNotice(notice);
  // };
  return (
    <div className="notice">
      <div className="notice__filters">
        <NoticeFilter />
      </div>
      <div className="notice__table">
        <TableNotice />
      </div>
      <div className="notice__paginationBtn">
        <PaginationBtn />
      </div>
    </div>
  );
}
