import React, { useState } from "react";
import "./TableSending.css"
import Arrow from "../../../assets/Arrow_down.svg";
// import Squea from "../../../assets/Squea.svg";
// import FilterSelectGrey from "../../FilterSelectGrey/FilterSelectGrey";

interface TableRow {
  selected: boolean;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
  column6: string;
  column7: string;
  column8: number;
  column9: string;
  column10: string;
  column11: string;
  column12: number;
  column13: string;
  column14: string;
}

const tableData: TableRow[] = [
  {
    selected: false,
    column2: "Настя Борисова",
    column3: "Силект",
    column4: "Силект",
    column5: "Силект",
    column6: "new Date(2024, 6, 19)",
    column7: "Имя куратора",
    column8: 154178,
    column9: "Россия",
    column10: "Калининград",
    column11: "Бориса Галушкина 40, кв. 166",
    column12: +79654128596,
    column13: "Сентябрь",
    column14: "Комментарий"
  },
  {
    selected: false,
    column2: "Настя Борисова",
    column3: "Силект",
    column4: "Силект",
    column5: "Силект",
    column6: "new Date(2024, 6, 19)",
    column7: "Имя куратора",
    column8: 154178,
    column9: "Россия",
    column10: "Калининград",
    column11: "Бориса Галушкина 40, кв. 166",
    column12: +79654128596,
    column13: "Сентябрь",
    column14: "Комментарий"
  },  {
    selected: false,
    column2: "Настя Борисова",
    column3: "Силект",
    column4: "Силект",
    column5: "Силект",
    column6: "new Date(2024, 6, 19)",
    column7: "Имя куратора",
    column8: 154178,
    column9: "Россия",
    column10: "Калининград",
    column11: "Бориса Галушкина 40, кв. 166",
    column12: +79654128596,
    column13: "Сентябрь",
    column14: "Комментарий"
  },
];

export default function DataTable() {
  const [showDetails, setShowDetails] = useState(Array(tableData.length).fill(false));

  const toggleDetails = (index: number) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  return (
    <div>
      <table className="table__sending">
        <thead>
          <tr>
            <th className="table__th_size_big">ФИО амбассадора</th>
            <th className="table__th_size_small">Мерч</th>
            <th className="table__th_size_small">Размер толстовки</th>
            <th className="table__th_size_small">Размер носков</th>
            <th className="table__th_size_small">Дата регистрации</th>
            <th className="table__th_size_medium">Имя куратора</th>
            <th className="table__th_size_smalest">Индекс</th>
            <th className="table__th_size_medium"><img src={Arrow} alt="иконка стрелочки" /></th>
            {/* <th>Страна</th>
            <th>Город</th>
            <th>Телефон</th>
            <th>Месяц</th>
            <th>Комментарий</th> */}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>{row.selected ? "☑️" : "☐"}</td>
                <td>{row.column2}</td>
                <td>{row.column3}</td>
                <td>{row.column4}</td>
                <td>{row.column5}</td>
                <td>{row.column6}</td>
                <td>{row.column7}</td>
                <td>{row.column8}</td>
                <td>{row.column9}</td>
                <td>{row.column10}</td>
                <td>{row.column11}</td>
                <td>{row.column12}</td>
                <td>{row.column13}</td>
                <td>{row.column14}</td>
                <td>
                  <button onClick={() => toggleDetails(index)}>
                    {showDetails[index] ? "Hide Details" : "Show Details"}
                  </button>
                </td>
              </tr>
              {showDetails[index] && (
                <tr>
                  <td colSpan={14}>
                    <td>{row.column8}</td>
                    <td>{row.column9}</td>
                    <td>{row.column10}</td>
                    <td>{row.column11}</td>
                    <td>{row.column12}</td>
                    <td>{row.column13}</td>
                    <td>{row.column14}</td>
                   {index + 1}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
