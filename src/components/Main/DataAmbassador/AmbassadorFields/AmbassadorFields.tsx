import './AmbassadorFields.css';
import InputWithButtons from '../../../InputWithButtons/InputWithButtons';
//import InputDateRange from '../../../InputDateRange/InputDateRange';
import { Ambassador } from '../DataAmbassador';
import { useState, useEffect } from 'react';
import InputMultiplySelect from '../../../InputMultiplySelect/InputMultiplySelect';
import AmbassadorsContentCard from '../AmbassadorsContentCard/AmbassadorsContentCard';
import * as Api from '../../../../utils/utils';
import FilterSelectGrey from '../../../FilterSelectGrey/FilterSelectGrey';

interface AmbassadorFieldsProps {
  ambassador?: Ambassador;
  setNewAmbassador: (x: object) => void;
}

export default function AmbassadorFields({
  ambassador,
  setNewAmbassador,
}: AmbassadorFieldsProps) {
  console.log(ambassador);
  // console.log(ambassador?.id);
  const [courseValue, setCourseValue] = useState(ambassador?.course.title);
  const [content, setContent] = useState<any>([]);
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
  const [showCourse, setShowCourse] = useState({ id: 0 });

  useEffect(() => {
    const dateObj = new Date(ambassador?.created);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    setDate(`${day}.${month}.${year}`);
  }, [ambassador?.created]);

  useEffect(() => {
    setNameValue(ambassador?.name);
    setSexValue(ambassador?.sex === 'w' ? 'Ж' : 'М');
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
    setCourseValue(ambassador?.course.title);
    setStatusValue(
      ambassador?.status === 'active'
        ? 'Активный'
        : ambassador?.status === 'paused'
        ? 'На паузе'
        : ambassador?.status === 'not_ambassador'
        ? 'Не амбассадор'
        : 'Уточняется'
    );
    setCurrentWorkValue(ambassador?.current_work);
    setTelegram(ambassador?.telegram);
    setProgramValue(ambassador?.course.title);
    setContent(ambassador?.content);
  }, [ambassador]);
  const [targetValue, setTargetValue] = useState<[]>([]);
  const [activityValue, setActivityValue] = useState<[]>([]);
  useEffect(() => {
    Api.getDropdowns().then(
      (res) => (
        setTargetValue(res.educational_goals.map((item: any) => item.title)),
        setActivityValue(res.ambassador_goals.map((item: any) => item.title))
      )
    );
  }, []);
  useEffect(() => {
    ambassador === undefined ? setNewAmbassador({}) : null;
  }, [ambassador]);

  const handleUpdateName = () => {
    console.log('PATCH');
    Api.updateAmbassadorName(nameValue, ambassador?.id);
  };

  // const handleUpdateSex = () => {
  //   console.log('PATCH');
  //   Api.updateAmbassadorSex(sexValue, ambassador?.id);
  // };

  const handleUpdateCountry = () => {
    console.log('PATCH');
    Api.updateAmbassadorCountry(countryValue, ambassador?.id);
  };

  const handleUpdateCity = () => {
    console.log('PATCH');
    Api.updateAmbassadorCity(cityValue, ambassador?.id);
  };

  const handleUpdateAddress = () => {
    console.log('PATCH');
    Api.updateAmbassadorAddress(addressValue, ambassador?.id);
  };
  const handleUpdateIndex = () => {
    console.log('PATCH');
    Api.updateAmbassadorIndex(indexValue, ambassador?.id);
  };
  const handleUpdatePromo = () => {
    console.log('PATCH');
    Api.updateAmbassadorPromo(promocode, ambassador?.id);
  };
  const handleUpdateEmail = () => {
    console.log('PATCH');
    Api.updateAmbassadorEmail(emailValue, ambassador?.id);
  };
  const handleUpdatePhone = () => {
    console.log('PATCH');
    Api.updateAmbassadorPhone(phoneValue, ambassador?.id);
  };
  const handleUpdateTelegram = () => {
    console.log('PATCH');
    Api.updateAmbassadorTelegram(telegram, ambassador?.id);
  };
  const handleUpdateCurrentWork = () => {
    console.log('PATCH');
    Api.updateAmbassadorCurrentWork(currentWorkValue, ambassador?.id);
  };
  const handleUpdateEducationGoal = () => {
    console.log('PATCH');
    Api.updateAmbassadorEducationGoal(educationValue, ambassador?.id);
  };
  // const handleUpdateAmbassadorGoals = () => {
  //   console.log('PATCH');
  //   Api.updateAmbassadorGoals(targetValue, ambassador?.id);
  // };
  const handleUpdateBlogLink = () => {
    console.log('PATCH');
    Api.updateAmbassadorBlogLink(blogLinkValue, ambassador?.id);
  };
  const handleUpdateClothingSize = () => {
    console.log('PATCH');
    Api.updateAmbassadorClothingSize(clothingSize, ambassador?.id);
  };
  const handleUpdateFootSize = () => {
    console.log('PATCH');
    Api.updateAmbassadorFootSize(footSizeValue, ambassador?.id);
  };
  const handleUpdateComment = () => {
    console.log('PATCH');
    Api.updateAmbassadorComment(commentValue, ambassador?.id);
  };
  const [sexShowValue, setSexShowValue] = useState('');
  console.log(sexShowValue);

  const [courses, setCourses] = useState<any>([]);
  const [sex, setSex] = useState<any>(['М', 'Ж']);
  const [status, setStatus] = useState<any>([]);
  const [country, setCountry] = useState<any>([]);
  const [city, setCity] = useState<any>([]);

  useEffect(() => {
    Api.getDropdowns().then(
      (res) => (
        console.log(res),
        setCourses(res.courses.map((item) => item.title)),
        setStatus(Object.values(res.ambassador_status)),
        setCountry(res.countries),
        setCity(res.cities)
      )
    );
  }, []);

  useEffect(() => {
    Api.getDropdowns().then(
      (res) => (
        console.log(res),
        setShowCourse(res.courses.filter((item) => item.title === courseValue))
      )
    );
  }, [courseValue]);
  console.log(showCourse);
  const [statusShowValue, setStatusShowValue] = useState('');
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
  useEffect(() => {
    setNewAmbassador({
      telegram: telegram,
      name: nameValue,
      country: countryValue,
      city: cityValue,
      address: addressValue,
      index: indexValue,
      email: emailValue,
      phone: phoneValue,
      current_work: currentWorkValue,
      education: educationValue,
      blog_link: blogLinkValue,
      foot_size: footSizeValue,
      comment: commentValue,
      course: showCourse[0]?.id,
      sex: sexShowValue,
      status: statusShowValue,
    });
  }, [
    addressValue,
    blogLinkValue,
    cityValue,
    commentValue,
    countryValue,
    currentWorkValue,
    educationValue,
    emailValue,
    footSizeValue,
    indexValue,
    nameValue,
    phoneValue,
    showCourse,
    telegram,
    sexShowValue,
    setNewAmbassador,
    statusShowValue,
  ]);
  return (
    <>
      <div className='ambassadors__data'>
        <InputWithButtons
          label='ФИО'
          placeholder='ФИО'
          width='320px'
          height='40px'
          value={nameValue}
          setValue={(e) => setNameValue(e.target.value)}
          resetInput={() => setNameValue('')}
          updateData={() => handleUpdateName()}
        />
        <FilterSelectGrey
          label='Пол'
          height='40px'
          width='320px'
          placeholder={ambassador === undefined ? 'Выбери из списка' : sexValue}
          options={sex}
          valueSelectFilter={sexValue}
          setValueSelectFilter={setSexValue}
        />
        <InputMultiplySelect options={targetValue} label='Цель' />
        <FilterSelectGrey
          label='Программа обучения'
          height='40px'
          width='320px'
          placeholder={
            ambassador === undefined ? 'Выбери из списка' : courseValue
          }
          options={courses}
          valueSelectFilter={courseValue}
          setValueSelectFilter={setCourseValue}
        />
        <InputWithButtons
          label='E-mail'
          placeholder='E-mail'
          width='320px'
          value={emailValue}
          setValue={(e) => setEmailValue(e.target.value)}
          resetInput={() => setEmailValue('')}
          updateData={() => handleUpdateEmail()}
        />
        <InputMultiplySelect options={activityValue} label='Виды активности' />
        <InputWithButtons
          label='Страна'
          placeholder='Страна'
          width='320px'
          value={countryValue}
          setValue={(e) => setCountryValue(e.target.value)}
          resetInput={() => setCountryValue('')}
          updateData={() => handleUpdateCountry()}
        />
        <InputWithButtons
          label='Телефон'
          placeholder='Телефон'
          width='320px'
          value={phoneValue}
          setValue={(e) => setPhoneValue(e.target.value)}
          resetInput={() => setPhoneValue('')}
          updateData={() => handleUpdatePhone()}
        />
        <InputWithButtons
          label='Ссылка на блог'
          placeholder='Ссылка на блог'
          width='320px'
          value={blogLinkValue}
          setValue={(e) => setBlogLinkValue(e.target.value)}
          resetInput={() => setBlogLinkValue('')}
          updateData={() => handleUpdateBlogLink()}
        />
        <InputWithButtons
          label='Город'
          placeholder='Город'
          width='320px'
          value={cityValue}
          setValue={(e) => setCityValue(e.target.value)}
          resetInput={() => setCityValue('')}
          updateData={() => handleUpdateCity()}
        />
        <InputWithButtons
          label='Telegram'
          placeholder='Telegram'
          width='320px'
          value={telegram}
          setValue={(e) => setTelegram(e.target.value)}
          resetInput={() => setTelegram('')}
          updateData={() => handleUpdateTelegram()}
        />
        <InputWithButtons
          label='Размер одежды'
          placeholder='Размер одежды'
          width='320px'
          value={clothingSize}
          setValue={(e) => setClothingSize(e.target.value)}
          resetInput={() => setClothingSize('')}
          updateData={() => handleUpdateClothingSize()}
        />
        <InputWithButtons
          label='Адресс'
          placeholder='Адресс'
          width='320px'
          value={addressValue}
          setValue={(e) => setAddressValue(e.target.value)}
          resetInput={() => setAddressValue('')}
          updateData={() => handleUpdateAddress()}
        />
        <InputWithButtons
          label='WhatsApp'
          placeholder='WhatsApp'
          width='320px'
          value={phoneValue}
          setValue={(e) => setPhoneValue(e.target.value)}
          resetInput={() => setWhatsAppValue('')}
          updateData={() => handleUpdatePhone()}
        />
        <InputWithButtons
          label='Размер ноги'
          placeholder='Размер ноги'
          width='320px'
          value={footSizeValue}
          setValue={(e) => setFootSizeValue(e.target.value)}
          resetInput={() => setFootSizeValue('')}
          updateData={() => handleUpdateFootSize()}
        />
        <InputWithButtons
          label='Индекс'
          placeholder='Индекс'
          width='320px'
          value={indexValue}
          setValue={(e) => setIndexValue(e.target.value)}
          resetInput={() => setIndexValue('')}
          updateData={() => handleUpdateIndex()}
        />
        <InputWithButtons
          label='Где учился до'
          placeholder='Где учился до'
          width='320px'
          value={educationValue}
          setValue={(e) => setEducationValue(e.target.value)}
          resetInput={() => setEducationValue('')}
          updateData={() => handleUpdateEducationGoal()}
        />
        <InputWithButtons
          label='Дата регистрации'
          placeholder='Дата регистрации'
          width='320px'
          value={date}
          setValue={(e) => setRegistration(e.target.value)}
          resetInput={() => setRegistration('')}
          updateData={() => console.log('NO')}
        />
        <InputWithButtons
          label='Промокод'
          placeholder='Промокод'
          width='320px'
          value={promocode}
          setValue={(e) => setPromocode(e.target.value)}
          resetInput={() => setPromocode('')}
          updateData={() => handleUpdatePromo()}
        />
        <InputWithButtons
          label='Кем сейчас работаешь'
          placeholder='Кем сейчас работаешь'
          width='320px'
          value={currentWorkValue}
          setValue={(e) => setCurrentWorkValue(e.target.value)}
          resetInput={() => setCurrentWorkValue('')}
          updateData={() => handleUpdateCurrentWork()}
        />
        <InputWithButtons
          label='Комментарий'
          placeholder='Комментарий'
          width='320px'
          value={commentValue}
          setValue={(e) => setCommentValue(e.target.value)}
          resetInput={() => setCommentValue('')}
          updateData={() => handleUpdateComment()}
        />
        <FilterSelectGrey
          label='Статус'
          height='40px'
          width='320px'
          fontSize='14px'
          placeholder={
            ambassador === undefined ? 'Выбери из списка' : statusValue
          }
          options={status}
          valueSelectFilter={statusValue}
          setValueSelectFilter={setStatusValue}
        />
      </div>
      {/* <div className='ambassadors__date'>
        <InputDateRange height='40px' width='272px' />
      </div> */}
      {/* {ambassador && (
        <div className='grid'>
          {content?.map((item: any) => (
            <AmbassadorsContentCard
              key={item.id}
              name={nameValue}
              count='2/4'
              height='88px'
              linkContent={item.link}
            />
          ))}
        </div>
      )} */}
    </>
  );
}
