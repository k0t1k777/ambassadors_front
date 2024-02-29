import InputContentTextProps from '../InputContentText/InputContentText';
import InputDate from '../InputDate/InputDate';
import InputChecked from '../InputChecked/InputChecked';
import CheckDone from '../../assets/Checkbox.svg?react';
import Cancel from '../../assets/Close_mini.svg?react';
import './InputPopupContentFields.css';
import { useState } from 'react';

interface InputPopupContentFieldsProps {
  numberOfInputs: number;
  incrementCount?: () => void;
}

export default function InputPopupContentFields({
  numberOfInputs,
  incrementCount
}: InputPopupContentFieldsProps) {
  const [publicationValue, setPublicationValue] = useState('');
  const [linkValue, setLinkValue] = useState('');
  const [isPublicationClicked, setIsPublicationClicked] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  const handleInputPublicationClick = () => {
    setIsPublicationClicked(prevState => !prevState);
    console.log('publication clicl');
  };

  const handleDonePublicationClick = () => {
    setIsPublicationClicked(false);
    console.log('Сохранение данных публикации', publicationValue);
  };

  const handleCancelPublicationClick = () => {
    setIsPublicationClicked(false);
    console.log('Отмена');
  };

  const handleInputLinkClick = () => {
    setIsLinkClicked(prevState => !prevState);
  };

  const handleDoneLinkClick = () => {
    setIsLinkClicked(false);
    console.log('Сохранение данных ссылки', linkValue);
  };

  const handleCancelLinkClick = () => {
    setIsLinkClicked(false);
    console.log('Отмена');
  };

  return (
    <div className="popup-create__input">
      <div className="popup-input__container">
        <div className="popup-create__container popup-create__checkbox">
          <InputChecked incrementCount={incrementCount} />
        </div>
        <InputContentTextProps
          label={`Публикация ${numberOfInputs}`}
          width={isPublicationClicked ? '247px' : '273px'}
          margin={!isPublicationClicked ? '0 66px 0 0' : '0'}
          placeholder="Вставьте ссылку"
          value={publicationValue}
          setValue={setPublicationValue}
          onClick={handleInputPublicationClick}
        />

        {isPublicationClicked && (
          <div className="popup-create__container popup-create__icon">
            <Cancel className="popup-create__check-done" onClick={handleCancelPublicationClick} />
            <CheckDone className="popup-create__check-done" onClick={handleDonePublicationClick} />
          </div>
        )}
      </div>
      <div className="popup-input__container">
        <InputContentTextProps
          label="Ссылка на файл"
          width={isLinkClicked ? '247px' : '273px'}
          margin={!isLinkClicked ? '0 66px 0 0' : '0'}
          placeholder="Вставьте ссылку"
          value={linkValue}
          setValue={setLinkValue}
          onClick={handleInputLinkClick}
        />
        {isLinkClicked && (
          <div className="popup-create__container popup-create__icon">
            <Cancel className="popup-create__check-done" onClick={handleCancelLinkClick} />
            <CheckDone className="popup-create__check-done" onClick={handleDoneLinkClick} />
          </div>
        )}
      </div>
      <InputDate width="234px" height="40px" label="Дата" />
    </div>
  );
}
