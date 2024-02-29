import FilterSelectGrey from '../../../FilterSelectGrey/FilterSelectGrey';
import InputDate from '../../../InputDate/InputDate';
import InputText from '../../../InputText/InputText';
import { useState } from 'react';
import './ContentFilter.css';
import ContentNewAmba from '../ContentNewAmba/ContentNewAmba';
import ContentInProcessAmba from '../ContentInProcessAmba/ContentInProcessAmba';
import ContentSuccessAmba from '../ContentSuccessAmba/ContentSuccessAmba';
import ContentAllAmba from '../ContentAllAmba/ContentAllAmba';

export default function ContentFilter() {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  const renderFilterComponents = () => {
    switch (selectedFilter) {
      case 'Новенькие':
        return <ContentNewAmba />;
      case 'В процессе':
        return <ContentInProcessAmba />;
      case 'Выполнено':
        return <ContentSuccessAmba />;
      default:
        return <ContentAllAmba />;
    }
  };

  return (
    <div className="content__filter">
      <div className="content__filter-select">
        <InputText
          label="ФИО амбассадора"
          placeholder="Введите ФИО"
          width="320px"
          margin="0 8px 0 0"
        />
        <FilterSelectGrey
          label="Выберите статус"
          width="124px"
          height="40px"
          margin="0 8px 0 0"
          placeholder="Все"
          fontSize="14px"
          options={['Все', 'Новенькие', 'В процессе', 'Выполнено']}
          onChange={handleFilterChange}
        />
        <InputDate label="От" width="272px" height="40px" margin="0 8px 0 0" />
        <InputDate label="До" width="272px" height="40px" margin="0 8px 0 0" />
      </div>
      {renderFilterComponents()}
    </div>
  );
}
