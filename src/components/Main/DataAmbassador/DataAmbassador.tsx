import './DataAmbassador.css';
import InputWithIcon from '../../InputWithIcon/InputWithIcon';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import ResetFilters from '../../ResetFilters/ResetFilters';
import Filters from '../../Filters/Filters';
import AmbassadorsHeadline from './AmbassadorsHeadline/AmbassadorsHeadline';
import AmbassadorsItem from './AmbassadorsItem/AmbassadorsItem';
import { useState } from 'react';
import { ReturnBtn } from '../../Btns/ReturnBtn/ReturnBtn';
import Header from '../../Header/Header';
import AmbassadorFields from './AmbassadorFields/AmbassadorFields';

export interface Ambassador {
  id: string;
  education_goal: {
    id: number;
    created: string;
    updated: string;
    title: string;
  };
  course: {
    id: number;
    created: string;
    updated: string;
    title: string;
  };
  ambassadors_goals: [
    {
      id: 1;
      created: string;
      updated: string;
      title: string;
    },
    {
      id: 3;
      created: string;
      updated: string;
      title: string;
    }
  ];
  created: string;
  updated: string;
  telegram: string;
  name: string;
  status: string;
  onboarding_status: boolean;
  sex: string;
  country: string;
  city: string;
  address: string;
  index: string;
  email: string;
  phone: string;
  current_work: string;
  education: string;
  blog_link: string;
  clothing_size: string;
  foot_size: string;
  comment: string;
}




interface DataAmbassadorProps {
  ambassadors: Ambassador[];
}

export default function DataAmbassador({ ambassadors }: DataAmbassadorProps) {
  const [ambassadorFieldsIsOpen, setAmbassadorFieldsIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Ambassador | undefined>();

  const handleIsOpen = () => {
    ambassadorFieldsIsOpen
      ? (setAmbassadorFieldsIsOpen(false), setSelectedItem(undefined))
      : setAmbassadorFieldsIsOpen(true);
  };

  return (
    <>
      <Header title='Данные амбассадоров' />
      <section className='data-ambassador'>
        <div className='data-ambassador__container'>
          {!ambassadorFieldsIsOpen && (
            <>
              <div className='search-add'>
                <InputWithIcon width='276px' placeholder='Поиск амбассадора' />
                <SubmitBtn
                  title='Добавить амбассадора'
                  width='250px'
                  height='50px'
                  fontSize='14px'
                  margin='32px 0 28px auto'
                  onClick={() => {
                    handleIsOpen();
                  }}
                />
              </div>
              <div className='data-ambassador__filters'>
                <Filters />
                <ResetFilters />
              </div>
              <div className='ambassadors'>
                <AmbassadorsHeadline />
                <ul className='ambassadors__items'>
                  {ambassadors?.map((item: Ambassador) => (
                    <AmbassadorsItem
                      key={item.id}
                      name={item.name}
                      sex={item.sex}
                      created={item.created}
                      status={item.status}
                      country={item.country}
                      city={item.city}
                      onboarding={item.onboarding_status}
                      item={item}
                      setSelectedItem={() => setSelectedItem(item)}
                      setAmbassadorFieldsIsOpen={() =>
                        setAmbassadorFieldsIsOpen(true)
                      }
                    />
                  ))}
                </ul>
              </div>
            </>
          )}
          {ambassadorFieldsIsOpen && (
            <>
              <div className='send-merch'>
                <ReturnBtn onClick={handleIsOpen} />
                <SubmitBtn
                  title={
                    selectedItem !== undefined ? 'Отправить мерч' : 'Сохранить'
                  }
                  width={selectedItem !== undefined ? '148px' : '100px'}
                  height='40px'
                  fontSize='14px'
                  margin='0 0 0 auto'
                  onClick={() => {
                    handleIsOpen();
                  }}
                />
              </div>
              <AmbassadorFields selectedItem={selectedItem} />
            </>
          )}
        </div>
      </section>
    </>
  );
}
