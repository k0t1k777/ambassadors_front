import './AmbassadorFields.css';
import InputText from '../../../InputText/InputText';
import InputDateRange from '../../../InputDateRange/InputDateRange';
import { Ambassador } from '../DataAmbassador';
import { useState } from 'react';
import InputMultiplySelect from '../../../InputMultiplySelect/InputMultiplySelect';
import ContentCard from '../../ContentCard/ContentCard';
import ContentSortWindow from '../../ContentSortWindow/ContentSortWindow';

interface AmbassadorFieldsProps {
  selectedItem?: Ambassador | undefined;
}

export default function AmbassadorFields({
  selectedItem,
}: AmbassadorFieldsProps) {
  console.log(selectedItem);

  const [nameValue, setNameValue] = useState(selectedItem?.name);
  const [sexValue, setSexValue] = useState(selectedItem?.sex);
  const [targetValue, setTargetValue] = useState('???');
  const [programValue, setProgramValue] = useState('???');
  const [emailValue, setEmailValue] = useState(selectedItem?.email);
  const [countryValue, setCountryValue] = useState(selectedItem?.country);
  const [cityValue, setCityValue] = useState(selectedItem?.city);
  const [phoneValue, setPhoneValue] = useState(selectedItem?.phone);
  const [activityValue, setActivityValue] = useState('???');
  const [blogLinkValue, setBlogLinkValue] = useState(selectedItem?.blog_link);
  const [clothingSize, setClothingSize] = useState(selectedItem?.clothing_size);
  const [addressValue, setAddressValue] = useState(selectedItem?.address);
  const [whatsAppValue, setWhatsAppValue] = useState('???');
  const [indexValue, setIndexValue] = useState(selectedItem?.index);
  const [educationValue, setEducationValue] = useState(selectedItem?.education);
  const [footSizeValue, setFootSizeValue] = useState(selectedItem?.foot_size);
  const [registration, setRegistration] = useState('???');
  const [promocode, setPromocode] = useState('???');
  const [commentValue, setCommentValue] = useState(selectedItem?.comment);
  const [statusValue, setStatusValue] = useState(selectedItem?.status);
  const [currentWorkValue, setCurrentWorkValue] = useState(
    selectedItem?.current_work
  );
  const [telegram, setTelegram] = useState('???');

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
          value={sexValue}
          setValue={(e) => setSexValue(e.target.value)}
        />
        <InputText
          label='Цель'
          placeholder='Цель'
          width='320px'
          value={targetValue}
          setValue={(e) => setTargetValue(e.target.value)}
        />
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
        <InputText
          label='Виды активности'
          placeholder='Виды активности'
          width='320px'
          value={activityValue}
          setValue={(e) => setActivityValue(e.target.value)}
        />
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
          value={registration}
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
        <InputMultiplySelect />
      </div>
      <div className='ambassadors__date'>
        <InputDateRange />
      </div>
      {selectedItem && (
        <div className='grid'>
          <ContentCard
            name='Имя амбассадора'
            count='2/4'
            height='88px'
            linkContent='Ссылка на контент'
            linkPhoto='Ссылка на фото'
          />
          <ContentCard
            name='Имя амбассадора'
            count='2/4'
            height='88px'
            linkContent='Ссылка на контент'
            linkPhoto='Ссылка на фото'
          />
          <ContentCard
            name='Имя амбассадора'
            count='2/4'
            height='88px'
            linkContent='Ссылка на контент'
            linkPhoto='Ссылка на фото'
          />
        </div>
      )}
    </>
  );
}
