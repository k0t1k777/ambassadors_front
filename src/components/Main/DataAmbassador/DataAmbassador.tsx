import './DataAmbassador.css';
import InputWithIcon from '../../InputWithIcon/InputWithIcon';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import ResetFilters from '../../ResetFilters/ResetFilters';
import Filters from '../../Filters/Filters';
import AmbassadorsHeadline from './AmbassadorsHeadline/AmbassadorsHeadline';
import AmbassadorsItem from './AmbassadorsItem/AmbassadorsItem';
import { useEffect, useState } from 'react';

interface Ambassador {
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

export default function DataAmbassador() {
  const [ambassadors, setAmbassadors] = useState<Ambassador[]>([]);

  useEffect(() => {
    fetch('http://178.208.79.39:8000/api/v1/ambassadors', {
      headers: {
        Authorization: 'Token b1dcbce7fe0dce859496b1c95c290f7423eb665e',
      },
    })
      .then((res) => res.json())
      .then((res) => setAmbassadors(res.results));
  }, []);

  console.log(ambassadors);

  return (
    <section className='data-ambassador'>
      <div className='data-ambassador__container'>
        <div className='search-add'>
          <InputWithIcon width='276px' placeholder='Поиск амбассадора' />
          <SubmitBtn
            title='Добавить амбассадора'
            width='250px'
            height='50px'
            fontSize='14px'
            margin='32px 0 28px auto'
          />
        </div>
        <div className='data-ambassador__filters'>
          <ResetFilters />
          <Filters />
        </div>
        <div className='ambassadors'>
          <AmbassadorsHeadline />
          <ul className='ambassadors__items'>
            {ambassadors?.map((item, index) => (
              <AmbassadorsItem
                key={item.id}
                number={index + 1}
                name={item.name}
                sex={item.sex}
                created={item.created}
                status={item.status}
                country={item.country}
                city={item.city}
                onboarding={item.onboarding_status}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
