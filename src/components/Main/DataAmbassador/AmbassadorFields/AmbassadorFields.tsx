import './AmbassadorFields.css';
import InputText from '../../../InputText/InputText';
import InputDateRange from '../../../InputDateRange/InputDateRange';
import { Ambassador } from '../DataAmbassador';
import { useState, useEffect } from 'react';
import InputMultiplySelect from '../../../InputMultiplySelect/InputMultiplySelect';
import ContentCard from '../../Content/ContentCard/ContentCard';

interface AmbassadorFieldsProps {
  ambassador?: Ambassador;
}

export default function AmbassadorFields({
  ambassador,
}: AmbassadorFieldsProps) {
  const [date, setDate] = useState(ambassador?.created);

  const [nameValue, setNameValue] = useState(ambassador?.name);
  const [sexValue, setSexValue] = useState(ambassador?.sex);
  const [programValue, setProgramValue] = useState(ambassador?.course.title);
  const [emailValue, setEmailValue] = useState(ambassador?.email);
  const [countryValue, setCountryValue] = useState(ambassador?.country);
  const [cityValue, setCityValue] = useState(ambassador?.city);
  const [phoneValue, setPhoneValue] = useState(ambassador?.phone);
  const [blogLinkValue, setBlogLinkValue] = useState(ambassador?.blog_link);
  const [clothingSize, setClothingSize] = useState(ambassador?.clothing_size);
  const [addressValue, setAddressValue] = useState(ambassador?.address);
  const [whatsAppValue, setWhatsAppValue] = useState('');
  const [indexValue, setIndexValue] = useState(ambassador?.index);
  const [educationValue, setEducationValue] = useState(ambassador?.education);
  const [footSizeValue, setFootSizeValue] = useState(ambassador?.foot_size);
  const [registration, setRegistration] = useState(ambassador?.created);
  const [promocode, setPromocode] = useState('');
  const [commentValue, setCommentValue] = useState(ambassador?.comment);
  const [statusValue, setStatusValue] = useState(ambassador?.status);
  const [currentWorkValue, setCurrentWorkValue] = useState(
    ambassador?.current_work
  );
  const [telegram, setTelegram] = useState(ambassador?.telegram);

  useEffect(() => {
    const dateObj = new Date(ambassador?.created);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    setDate(`${day}.${month}.${year}`);
  }, [ambassador?.created]);

  useEffect(() => {
    setNameValue(ambassador?.name);
    setSexValue(ambassador?.sex);
    setEmailValue(ambassador?.email);
    setCountryValue(ambassador?.country);
    setCityValue(ambassador?.city);
    setPhoneValue(ambassador?.phone);
    setBlogLinkValue(ambassador?.blog_link);
    setClothingSize(ambassador?.clothing_size);
    setAddressValue(ambassador?.address);
    setIndexValue(ambassador?.index);
    setEducationValue(ambassador?.education);
    setFootSizeValue(ambassador?.foot_size);
    setRegistration(ambassador?.created);
    setCommentValue(ambassador?.comment);
    setStatusValue(ambassador?.status);
    setCurrentWorkValue(ambassador?.current_work);
    setTelegram(ambassador?.telegram);
    setProgramValue(ambassador?.course.title);
    setContent(ambassador?.content);
    // setTargetValue(ambassador?.ambassadors_goals.map(item => console.log(item)));
    console.log(content);
  }, [ambassador]);

  console.log(ambassador);

  //console.log(ambassador?.ambassadors_goals.map((item) => console.log(item)));

  const [targetValue, setTargetValue] = useState<[]>([]);
  const [activityValue, setActivityValue] = useState<[]>([]);
  const [content, setContent] = useState<any>([]);
  //
  // useEffect(() => {
  //   setTargetValue(ambassador.map((item) => item.ambassador_goals.title));
  //   setActivityValue(ambassador.map((item) => item.education_goals.title));
  // }, [ambassador]);

  // const addNewAmbassador = () => {
  //   fetch(`http://178.208.79.39:8000/api/v1/ambassadors/`, {
  //     method: 'POST',
  //     headers: {
  //       authorization: 'Token 39795cab103d8c6d824d53c2acb64a7878be9430',
  //     },
  //     body: JSON.stringify({
  //       telegram: {
  //         telegram,
  //       },
  //       name: {
  //         nameValue,
  //       },
  //       onboarding_status: true,
  //       sex: {
  //         choices: [
  //           {
  //             value: 'm',
  //             display_name: 'Мужской',
  //           },
  //         ],
  //       },
  //       country: {
  //         countryValue,
  //       },
  //       city: {
  //         cityValue,
  //       },
  //       address: {
  //         addressValue,
  //       },
  //       index: {
  //         indexValue,
  //       },
  //       email: {
  //         emailValue,
  //       },
  //       phone: {
  //         phoneValue,
  //       },
  //       current_work: {
  //         currentWorkValue,
  //       },
  //       education: {
  //         educationValue,
  //       },
  //       blog_link: {
  //         blogLinkValue,
  //       },
  //       foot_size: {
  //         footSizeValue,
  //       },
  //       comment: {
  //         commentValue,
  //       },
  //     }),
  //   });
  // };

  return (
    <>
      <div className='ambassadors__data'>
        <InputText
          label='ФИО'
          placeholder='ФИО'
          width='320px'
          value={nameValue}
          setValue={(e) => setNameValue(e.target.value)}
        />
        <InputText
          label='Пол'
          placeholder='Пол'
          width='320px'
          value={sexValue === 'w' ? 'Ж' : 'М'}
          setValue={(e) => setSexValue(e.target.value)}
        />
        <InputMultiplySelect options={targetValue} label='Цель' />
        <InputText
          label='Программа обучения'
          placeholder='Программа обучения'
          width='320px'
          value={programValue}
          setValue={(e) => setProgramValue(e.target.value)}
        />
        <InputText
          label='E-mail'
          placeholder='E-mail'
          width='320px'
          value={emailValue}
          setValue={(e) => setEmailValue(e.target.value)}
        />
        <InputMultiplySelect options={activityValue} label='Виды активности' />
        <InputText
          label='Страна'
          placeholder='Страна'
          width='320px'
          value={countryValue}
          setValue={(e) => setCountryValue(e.target.value)}
        />
        <InputText
          label='Телефон'
          placeholder='Телефон'
          width='320px'
          value={phoneValue}
          setValue={(e) => setPhoneValue(e.target.value)}
        />
        <InputText
          label='Ссылка на блог'
          placeholder='Ссылка на блог'
          width='320px'
          value={blogLinkValue}
          setValue={(e) => setBlogLinkValue(e.target.value)}
        />
        <InputText
          label='Город'
          placeholder='Город'
          width='320px'
          value={cityValue}
          setValue={(e) => setCityValue(e.target.value)}
        />
        <InputText
          label='Telegram'
          placeholder='Telegram'
          width='320px'
          value={telegram}
          setValue={(e) => setTelegram(e.target.value)}
        />
        <InputText
          label='Размер одежды'
          placeholder='Размер одежды'
          width='320px'
          value={clothingSize}
          setValue={(e) => setClothingSize(e.target.value)}
        />
        <InputText
          label='Адресс'
          placeholder='Адресс'
          width='320px'
          value={addressValue}
          setValue={(e) => setAddressValue(e.target.value)}
        />
        <InputText
          label='WhatsApp'
          placeholder='WhatsApp'
          width='320px'
          value={whatsAppValue}
          setValue={(e) => setWhatsAppValue(e.target.value)}
        />
        <InputText
          label='Размер ноги'
          placeholder='Размер ноги'
          width='320px'
          value={footSizeValue}
          setValue={(e) => setFootSizeValue(e.target.value)}
        />
        <InputText
          label='Индекс'
          placeholder='Индекс'
          width='320px'
          value={indexValue}
          setValue={(e) => setIndexValue(e.target.value)}
        />
        <InputText
          label='Где учился до'
          placeholder='Где учился до'
          width='320px'
          value={educationValue}
          setValue={(e) => setEducationValue(e.target.value)}
        />
        <InputText
          label='Дата регистрации'
          placeholder='Дата регистрации'
          width='320px'
          value={date}
          setValue={(e) => setRegistration(e.target.value)}
        />
        <InputText
          label='Промокод'
          placeholder='Промокод'
          width='320px'
          value={promocode}
          setValue={(e) => setPromocode(e.target.value)}
        />
        <InputText
          label='Кем сейчас работаешь'
          placeholder='Кем сейчас работаешь'
          width='320px'
          value={currentWorkValue}
          setValue={(e) => setCurrentWorkValue(e.target.value)}
        />
        <InputText
          label='Комментарий'
          placeholder='Комментарий'
          width='320px'
          value={commentValue}
          setValue={(e) => setCommentValue(e.target.value)}
        />
        <InputText
          label='Статус'
          placeholder='Статус'
          width='320px'
          value={statusValue}
          setValue={(e) => setStatusValue(e.target.value)}
        />
      </div>
      <div className='ambassadors__date'>
        <InputDateRange height='40px' width='272px' />
      </div>
      {ambassador && (
        <div className='grid'>
          {content?.map((item) => (
            <ContentCard
              key={item.id}
              name={nameValue}
              count='2/4'
              height='88px'
              linkContent={item.link}
            />
          ))}
        </div>
      )}
    </>
  );
}
