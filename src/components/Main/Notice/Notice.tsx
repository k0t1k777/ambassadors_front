import './Notice.css';
import TableNotice from '../Table/TableNotice';
import NoticeFilter from './NoticeFilter/NoticeFilter';
import { useEffect, useState } from 'react';

export interface Notification {
  actor_object_name: string;
  description: string;
  id: string;
  time_since: string;
  timestamp: string;
  unread: boolean;
  verb: string;
}
export interface NoticeProp {
  notice: Notification[];
  handleAllAsRead: () => void;
}

export default function Notice({ notice, handleAllAsRead }: NoticeProp) {
  const [showNotice, setShowNotice] = useState(notice);

  useEffect(() => {
    setShowNotice(notice);
  }, [notice]);

  // const handleClearFilters = () => {
  //   setShowNotice(notice);
  // };

  return (
    <div className='notice'>
      <div className='notice__filters'>
        <NoticeFilter
        //  onResetFilters={() => handleClearFilters()}
        />
      </div>
<<<<<<< HEAD
      <div className="notice__table">
        <TableNotice
          item={showNotice}
          handleAllAsRead={handleAllAsRead}
        />
      </div>
      <div className="notice__paginationBtn">
        {/* <PaginationBtn /> */}
=======
      <div className='notice__table'>
        <TableNotice item={showNotice} handleAllAsRead={handleAllAsRead} />
>>>>>>> c802d6ca030a7176ee8290244380a21b03f4df9f
      </div>
    </div>
  );
}
