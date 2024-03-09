import "./Notice.css";
import TableNotice from "../Table/TableNotice";
import PaginationBtn from "../../Btns/PaginationBtn/PaginationBtn";
import NoticeFilter from "./NoticeFilter/NoticeFilter";
import { useEffect, useState } from "react";

export interface Notification {
  actor_content_type: string;
  description: string;
  id: string;
  time_since: string;
  timestamp: string;
  unread: boolean;
  verb: string;
  // unseen: string
}
export interface NoticeProp {
  notice: Notification[];
}

export default function Notice({ notice }: NoticeProp) {
  const [showNotice, setShowNotice] = useState(notice);

  useEffect(() => {
    setShowNotice(notice);
  }, [notice]);

  // const handleClearFilters = () => {
  //   setShowNotice(notice);
  // };
  return (
    <div className="notice">
      <div className="notice__filters">
        <NoticeFilter 
      //  onResetFilters={() => handleClearFilters()}
        />
      </div>
      <div className="notice__table">
        <TableNotice item={showNotice}/>
      </div>
      <div className="notice__paginationBtn">
        <PaginationBtn />
      </div>
    </div>
  );
}
