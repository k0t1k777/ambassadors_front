import React, { useState } from "react";
import "./TableSending.css";
import ArrowDown from "../../../assets/Arrow_down.svg";
import ArrowUp from "../../../assets/Arrow_up.svg";
// import CheckboxTable from "../../CheckboxTable/CheckboxTable";
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
    column2: "Мерч",
    column3: "Силект",
    column4: "Силект",
    column5: "Силект",
    column6: "23.02.2024",
    column7: "Имя куратора",
    column8: 154178,
    column9: "Россия1",
    column10: "Калининград1",
    column11: "Бориса Галушкина 40, кв. 166",
    column12: +79654128596,
    column13: "Сентябрь",
    column14: "Комментарий",
  },
  {
    selected: false,
    column2: "Мерч",
    column3: "Силект",
    column4: "Силект",
    column5: "Силект",
    column6: "23.02.2024",
    column7: "Имя куратора",
    column8: 154178,
    column9: "Россия2",
    column10: "Калининград2",
    column11: "Бориса Галушкина 40, кв. 166",
    column12: +79654128596,
    column13: "Сентябрь",
    column14: "Комментарий",
  },
  {
    selected: false,
    column2: "Мерч",
    column3: "Силект",
    column4: "Силект",
    column5: "Силект",
    column6: "23.02.2024",
    column7: "Имя куратора",
    column8: 154178,
    column9: "Россия3",
    column10: "Калининград3",
    column11: "Бориса Галушкина 40, кв. 166",
    column12: +79654128596,
    column13: "Сентябрь",
    column14: "Комментарий",
  },
];

export default function DataTable() {
  const [showDetails, setShowDetails] = useState(
    Array(tableData.length).fill(false)
  );

  const toggleDetails = (index: number) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  return (
    <div className="table__sending">
      {" "}
      <div className="table__container-header">
        <div className="table__th table__th_size_s"></div>
        <div className="table__th table__th_size_xl">ФИО амбассадора</div>
        <div className="table__th table__th_size_x">Мерч</div>
        <div className="table__th table__th_size_x">Размер толстовки</div>
        <div className="table__th table__th_size_x">Размер носков</div>
        <div className="table__th table__th_size_x">Дата регистрации</div>
        <div className="table__th table__th_size_l">Имя куратора</div>
        <div className="table__th table__th_size_m">Индекс</div>
        <div className="table__th table__th_size_sm"></div>
      </div>
      {tableData.map((row, index) => (
        <React.Fragment key={index}>
          <div className="table__container-data">
            <div className="table__th table__th_size_s">{row.selected}</div>
            <div className="table__th table__th_size_s">{row.column2}</div>
            <div className="table__th table__th_size_xl">{row.column3}</div>
            <div className="table__th table__th_size_x">{row.column4}</div>
            <div className="table__th table__th_size_x">{row.column5}</div>
            <div className="table__th table__th_size_x">{row.column6}</div>
            <div className="table__th table__th_size_x">{row.column7}</div>
            <div className="table__th table__th_size_l">{row.column8}</div>
            <div className="table__th table__th_size_sm">
              <button
                onClick={() => toggleDetails(index)}
                className="table__button"
              >
                {showDetails[index] ? (
                  <img src={ArrowUp} alt="иконка стрелочки" />
                ) : (
                  <img src={ArrowDown} alt="иконка стрелочки" />
                )}
              </button>
            </div>
          </div>
          {showDetails[index] && (
            <div className="table__container-dropdawn">
              <div className="table__th table__td_size_s">
                <p className="table__subtitle-dropdawn">Страна</p>
                <p className="table__title-dropdawn">{row.column9}</p>
              </div>
              <div className="table__th table__td_size_l">
                <p className="table__subtitle-dropdawn">Город</p>
                <p className="table__title-dropdawn">{row.column10}</p>
              </div>
              <div className="table__th table__td_size_xl">
                <p className="table__subtitle-dropdawn">Улица, дом</p>
                <p className="table__title-dropdawn">{row.column11}</p>
              </div>
              <div className="table__th table__th_size_x">
                <p className="table__subtitle-dropdawn">Телефон</p>
                <p className="table__title-dropdawn">{row.column12}</p>
              </div>
              <div className="table__th table__td_size_s">
                <p className="table__subtitle-dropdawn">Месяц</p>
                <p className="table__title-dropdawn">{row.column13}</p>
              </div>
              <div className="table__th table__td_size_xxl">
                <p className="table__subtitle-dropdawn"></p>
                <p className="table__title-dropdawn">{row.column14}</p>
              </div>
              {/* {index + 1} */}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
