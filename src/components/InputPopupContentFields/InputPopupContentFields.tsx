import InputContentText from '../InputContentText/InputContentText';
import InputDate from '../InputDate/InputDate';
import ContentChecked from '../Main/Content/ContentChecked/ContentChecked';
import CheckDone from '../../assets/Checkbox.svg?react';
import Cancel from '../../assets/Close_mini.svg?react';
import './InputPopupContentFields.css';
import { useState, useEffect } from 'react';

interface InputPopupContentFieldsProps {
  numberOfInputs: number;
  incrementCount?: () => void;
  decrementCount?: () => void;
  fileValue?: string;
  linkValue?: string;
  onChangePublication?: (value: string) => void;
  onChangeLink?: (value: string) => void;
}

export default function InputPopupContentFields({
  numberOfInputs,
  incrementCount,
  decrementCount,
  fileValue,
  linkValue,
  onChangePublication,
  onChangeLink
}: InputPopupContentFieldsProps) {
  const [isPublicationClicked, setIsPublicationClicked] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  const handleInputPublicationClick = () => {
    setIsPublicationClicked(true);
  };

  const handleSavePublication = (value: string) => {
    setIsPublicationClicked(false);
    console.log('Сохранение данных публикации', value);
  };

  const handleCancelPublication = () => {
    setIsPublicationClicked(false);
    console.log('Отмена');
  };

  const handleInputLinkClick = () => {
    setIsLinkClicked(true);
  };

  const handleSaveLink = (value: string) => {
    setIsLinkClicked(false);
    console.log('Сохранение данных ссылки', value);
  };

  const handleCancelLink = () => {
    setIsLinkClicked(false);
    console.log('Отмена');
  };

  return (
    <div className="popup-create__input">
      <div className="popup-input__container">
        <div className="popup-create__container popup-create__checkbox">
          <ContentChecked incrementCount={incrementCount} decrementCount={decrementCount} />
        </div>
        <InputContentText
          label={`Публикация ${numberOfInputs}`}
          width={isPublicationClicked ? '247px' : '273px'}
          margin={!isPublicationClicked ? '0 66px 0 0' : '0'}
          placeholder="Вставьте ссылку"
          value={linkValue}
          setValue={handleSavePublication}
          onChange={value => {
            handleInputPublicationClick(value);
            if (onChangePublication) {
              onChangePublication(value);
            }
          }}
          onClick={() => setIsPublicationClicked(true)}
        />

        {isPublicationClicked && (
          <div className="popup-create__container popup-create__icon">
            <Cancel className="popup-create__check-done" onClick={handleCancelPublication} />
            <CheckDone
              className="popup-create__check-done"
              onClick={() => handleSavePublication(linkValue || '')}
            />
          </div>
        )}
      </div>
      <div className="popup-input__container">
        <InputContentText
          label="Ссылка на файл"
          width={isLinkClicked ? '247px' : '273px'}
          margin={!isLinkClicked ? '0 66px 0 0' : '0'}
          placeholder="Вставьте ссылку"
          value={fileValue}
          setValue={handleSaveLink}
          onChange={value => {
            handleInputLinkClick(value);
            if (onChangeLink) {
              onChangeLink(value);
            }
          }}
          onClick={() => setIsLinkClicked(true)}
        />
        {isLinkClicked && (
          <div className="popup-create__container popup-create__icon">
            <Cancel className="popup-create__check-done" onClick={handleCancelLink} />
            <CheckDone
              className="popup-create__check-done"
              onClick={() => handleSaveLink(fileValue || '')}
            />
          </div>
        )}
      </div>
      <InputDate width="234px" height="40px" label="Дата" />
    </div>
  );
}
