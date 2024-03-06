import "./Budjet.css";
import TableBudjet from "../Table/TableBudjet";
import PaginationBtn from "../../Btns/PaginationBtn/PaginationBtn";
import SubmitBtn from "../../Btns/SubmitBtn/SubmitBtn";
import BudjetFilter from "./BudjetFilter/BudjetFilter";
import { useState } from "react";

export interface Budjet {
  BudjetProp: BudjetProp[];
  city: string;
  country: string;
  course: {
    id: number;
    title: string;
  };
  title: string;
  created: string;
  name: string;
  onboarding_status: boolean;
  sex: string;
  status: string;
}
interface BudjetProp {
  budjet: Budjet[];
}

export default function Budjet({ budjet }: BudjetProp) {
  const [showBudjet, setShowBudjet] = useState(budjet);
  console.log('budjet: ', budjet);
  
  return (
    <div className="budjet">
      <div className="budjet__filters">
        <BudjetFilter />
        <SubmitBtn
          title="Выгрузить данные"
          width="162px"
          height="40px"
          fontSize="14px"
          margin="20px 0 28px auto"
        />
      </div>
      <div className="budjet__table">
        <TableBudjet />
      </div>
      <div className="budjet__paginationBtn">
        <PaginationBtn />
      </div>
    </div>
  );
}
