import './DataAmbassador.css';
import InputWithIcon from '../../InputWithIcon/InputWithIcon';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import ResetFilters from '../../ResetFilters/ResetFilters';
import Filters from '../../Filters/Filters';
import { useEffect, useState } from 'react';
import AmbassadorsHeadline from './AmbassadorsHeadline/AmbassadorsHeadline';
import AmbassadorsItem from './AmbassadorsItem/AmbassadorsItem';
import { ReturnBtn } from '../../Btns/ReturnBtn/ReturnBtn';
import AmbassadorFields from './AmbassadorFields/AmbassadorFields';
import PopupSendMerch from '../../PopupSendMerch/PopupSendMerch';

export interface Ambassador {
  id: string;
  education_goal: {
    id: number;
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
      id: number;
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
  content: [
    {
      id: string;
      link: string;
      file: null | string;
      created: string;
      updated: string;
    }
  ];
}

interface DataAmbassadorProps {
  ambassadors: Ambassador[];
}

export default function DataAmbassador({ ambassadors }: DataAmbassadorProps) {
  const [showAmbassadors, setShowAmbassadors] = useState(ambassadors);
  const [ambassadorFieldsIsOpen, setAmbassadorFieldsIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState<Ambassador | undefined>();
  const [inputValue, setInputValue] = useState('');

  const [courseValue, setCourseValue] = useState('');
  const [sexValue, setSexValue] = useState('');
  const [statusValue, setStatusValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [isSendingOpen, setIsSendingOpen] = useState(false);

  const handleIsOpen = () => {
    ambassadorFieldsIsOpen
      ? (setAmbassadorFieldsIsOpen(false), setAmbassador(undefined))
      : setAmbassadorFieldsIsOpen(true);
  };

  const handleClearFilters = () => {
    setCourseValue('');
    setSexValue('');
    setStatusValue('');
    setCityValue('');
    setCountryValue('');
  };

  useEffect(() => {
    setShowAmbassadors(ambassadors);
  }, [ambassadors]);

  useEffect(() => {
    setShowAmbassadors(
      ambassadors.filter(
        (item) =>
          item.name !== null &&
          item.name.toLowerCase().includes(inputValue.toLowerCase()) &&
          item.country !== null &&
          item.country.toLowerCase().includes(countryValue.toLowerCase()) &&
          item.city !== null &&
          item.city.toLowerCase().includes(cityValue.toLowerCase()) &&
          item.course.title !== null &&
          item.course.title.toLowerCase().includes(courseValue.toLowerCase())
      )
    );
  }, [inputValue, cityValue, countryValue, courseValue]);

  const [ambassador, setAmbassador] = useState<Ambassador | undefined>(
    selectedItem
  );
  useEffect(() => {
    if (selectedItem !== undefined) {
      fetch(
        `http://178.208.79.39:8000/api/v1/ambassadors/${selectedItem?.id}`,
        {
          headers: {
            authorization: 'Token 39795cab103d8c6d824d53c2acb64a7878be9430',
          },
        }
      )
        .then((res) => res.json())
        .then((res) => setAmbassador(res));
    }
  }, [selectedItem]);

  

  return (
    <>
      <section className='data-ambassador'>
        <div className='data-ambassador__container'>
          {!ambassadorFieldsIsOpen && (
            <>
              <div className='search-add'>
                <InputWithIcon
                  width='276px'
                  placeholder='Поиск амбассадора'
                  value={inputValue}
                  setValue={(e) => setInputValue(e.target.value)}
                />
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
                <Filters
                  ambassadors={ambassadors}
                  courseValue={courseValue}
                  setCourseValue={setCourseValue}
                  sexValue={sexValue}
                  setSexValue={setSexValue}
                  statusValue={statusValue}
                  setStatusValue={setStatusValue}
                  cityValue={cityValue}
                  setCityValue={setCityValue}
                  countryValue={countryValue}
                  setCountryValue={setCountryValue}
                />
                <ResetFilters onResetFilters={handleClearFilters} />
              </div>
              <div className='ambassadors'>
                <AmbassadorsHeadline />
                <ul className='ambassadors__items'>
                  {showAmbassadors?.map((item: Ambassador) => (
                    <AmbassadorsItem
                      key={item.id}
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
                    selectedItem !== undefined
                      ? setIsSendingOpen(true)
                      : handleIsOpen();
                  }}
                />
              </div>
              <AmbassadorFields ambassador={ambassador} />
              {isSendingOpen && (
                <PopupSendMerch
                  open={isSendingOpen}
                  handleClose={() => setIsSendingOpen(false)}
                />
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
