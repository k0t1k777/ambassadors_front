import dayjs from "dayjs";
import InputDate from "../../../InputDate/InputDate";
import { useState } from "react";
import "./BudjetFilter.css";
import ResetFilters from "../../../ResetFilters/ResetFilters";

export default function BudjetFilter() {
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null);

  const handleStartDateChange = (value: dayjs.Dayjs | null) => {
    setStartDate(value);
  };

  const handleEndDateChange = (value: dayjs.Dayjs | null) => {
    setEndDate(value);
  };

  const handleResetFilters = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div>
      <div className="budjet__filter-select">
        <InputDate
          label="От"
          width="272px"
          height="40px"
          margin="0 8px 0 0"
          valueDate={startDate}
          setValueDate={handleStartDateChange}
        />
        <InputDate
          label="До"
          width="272px"
          height="40px"
          margin="0 8px 0 0"
          valueDate={endDate}
          setValueDate={handleEndDateChange}
        />
      </div>
      <ResetFilters margin="0 0 24px" onResetFilters={handleResetFilters} />
    </div>
  );
}
