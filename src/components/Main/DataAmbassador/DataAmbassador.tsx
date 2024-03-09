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
import * as Api from '../../../utils/utils';
import dayjs from 'dayjs';

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
  const [ambassadorFieldsIsOpen, setAmbassadorFieldsIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Ambassador | undefined>();
  const [inputValue, setInputValue] = useState('');
  const [courseValue, setCourseValue] = useState('');
  const [sexValue, setSexValue] = useState('');
  const [sexShowValue, setSexShowValue] = useState('');
  const [statusValue, setStatusValue] = useState('');
  const [statusShowValue, setStatusShowValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [isSendingOpen, setIsSendingOpen] = useState(false);
  const [date, setDate] = useState('');

  useEffect(() => {
    if (sexValue === 'Ж') {
      setSexShowValue('w');
    } else if (sexValue === 'М') {
      setSexShowValue('m');
    }
  }, [sexValue]);

  useEffect(() => {
    if (statusValue === 'Активный') {
      setStatusShowValue('active');
    } else if (statusValue === 'На паузе') {
      setStatusShowValue('paused');
    } else if (statusValue === 'Не амбассадор') {
      setStatusShowValue('not_ambassador');
    } else if (statusValue === 'Уточняется') {
      setStatusShowValue('pending');
    }
  }, [statusValue]);

  //console.log(statusShowValue);

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
    setSexValue('');
    setInputValue('');
    setShowAmbassadors(ambassadors);
  };

  useEffect(() => {
    setShowAmbassadors(ambassadors);
  }, [ambassadors]);

  useEffect(() => {
    if (countryValue !== '') {
      Api.getFilteredCountry(countryValue).then((data) => {
        console.log(data);
        setShowAmbassadors(data.results);
      });
    }
  }, [countryValue]);

  useEffect(() => {
    if (cityValue !== '') {
      Api.getFilteredCity(cityValue).then((data) => {
        console.log(data);
        setShowAmbassadors(data.results);
      });
    }
  }, [cityValue]);

  useEffect(() => {
    if (sexShowValue !== '') {
      Api.getFilteredSex(sexShowValue).then((data) => {
        console.log(data);
        setShowAmbassadors(data.results);
      });
    }
  }, [sexShowValue]);

  useEffect(() => {
    if (statusShowValue !== '') {
      Api.getFilteredStatus(statusShowValue).then((data) => {
        console.log(data);
        setShowAmbassadors(data.results);
      });
    }
  }, [statusShowValue]);

  useEffect(() => {
    if (inputValue !== '') {
      Api.getSearchAmbassadors(inputValue).then((data) => {
        console.log(data);
        setShowAmbassadors(data.results);
      });
    } else {
      setShowAmbassadors(ambassadors);
    }
  }, [inputValue]);

  const [showDate, setShowDate] = useState<any>('');
  useEffect(() => {
    if (showDate !== dayjs()) {
      console.log(showDate);
      Api.getFilteredDate(showDate).then((data) => {
        console.log(data);
        setShowAmbassadors(data.results);
      });
    } else {
      setShowAmbassadors(ambassadors);
    }
  }, [showDate]);

  useEffect(() => {
    if (courseValue !== '') {
      console.log(courseValue);
      Api.getFilteredCourse(courseValue).then((data) => {
        console.log(data);
        setShowAmbassadors(data.results);
      });
    } else {
      setShowAmbassadors(ambassadors);
    }
  }, [courseValue]);

  const [ambassador, setAmbassador] = useState<Ambassador | undefined>(
    selectedItem
  );
  useEffect(() => {
    if (selectedItem !== undefined) {
      Api.getDataCurrentAmbassador(selectedItem?.id).then((res) =>
        setAmbassador(res)
      );
    }
  }, [selectedItem]);

  const addNewAmbassador = () => {
    console.log('works');
    console.log(newAmbassador);
    Api.addNewAmbassador(newAmbassador);
  };

  const [newAmbassador, setNewAmbassador] = useState<object>({});

  useEffect(() => {
    setShowDate(dayjs(date).format('YYYY-MM-DD'));
  }, [date]);

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
                  ambassadors={showAmbassadors}
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
                  valueDate={date}
                  setValueDate={setDate}
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
                    ambassador !== undefined ? 'Отправить мерч' : 'Сохранить'
                  }
                  width={ambassador !== undefined ? '148px' : '100px'}
                  height='40px'
                  fontSize='14px'
                  margin='0 0 0 auto'
                  onClick={() => {
                    ambassador !== undefined
                      ? setIsSendingOpen(true)
                      : addNewAmbassador();
                  }}
                />
              </div>
              <AmbassadorFields
                ambassador={ambassador}
                setNewAmbassador={setNewAmbassador}
              />
              {isSendingOpen && (
                <PopupSendMerch
                  ambassador={ambassador}
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
