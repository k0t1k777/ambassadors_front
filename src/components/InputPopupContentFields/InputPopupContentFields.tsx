import InputContentTextProps from '../InputContentText/InputContentText';
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
  links?: string[];
  files?: (string | null)[];
}

export default function InputPopupContentFields({
  numberOfInputs,
  incrementCount,
  decrementCount,
  links = [],
  files = []
}: InputPopupContentFieldsProps) {
  console.log(files);
  const [publicationValue, setPublicationValue] = useState('');
  const [linkValue, setLinkValue] = useState('');
  const [previousPublicationValue, setPreviousPublicationValue] = useState('');
  const [previousLinkValue, setPreviousLinkValue] = useState('');
  const [isPublicationClicked, setIsPublicationClicked] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  const handleInputPublicationClick = (value: string) => {
    setPublicationValue(value);
  };

  const handleSavePublication = () => {
    setIsPublicationClicked(false);
    setPreviousPublicationValue(publicationValue);
    console.log('Сохранение данных публикации', publicationValue);
  };

  const handleCancelPublication = () => {
    setIsPublicationClicked(false);
    setPublicationValue(previousPublicationValue);
    console.log('Отмена');
  };

  const handleInputLinkClick = (value: string) => {
    setLinkValue(value);
  };

  const handleSaveLink = () => {
    setIsLinkClicked(false);
    setPreviousLinkValue(publicationValue);
    console.log('Сохранение данных ссылки', linkValue);
  };

  const handleCancelLink = () => {
    setIsLinkClicked(false);
    setLinkValue(previousLinkValue);
    console.log('Отмена');
  };

  useEffect(() => {
    setPreviousPublicationValue(publicationValue);
    setPreviousLinkValue(linkValue);
  }, [publicationValue, linkValue]);

  return (
    <div className="popup-create__input">
      <div className="popup-input__container">
        <div className="popup-create__container popup-create__checkbox">
          <ContentChecked incrementCount={incrementCount} decrementCount={decrementCount} />
        </div>
        <InputContentTextProps
          label={`Публикация ${numberOfInputs}`}
          width={isPublicationClicked ? '247px' : '273px'}
          margin={!isPublicationClicked ? '0 66px 0 0' : '0'}
          placeholder="Вставьте ссылку"
          value={publicationValue}
          setValue={setPublicationValue}
          onChange={handleInputPublicationClick}
          onClick={() => setIsPublicationClicked(true)}
        />

        {isPublicationClicked && (
          <div className="popup-create__container popup-create__icon">
            <Cancel className="popup-create__check-done" onClick={handleCancelPublication} />
            <CheckDone className="popup-create__check-done" onClick={handleSavePublication} />
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
            <Cancel className="popup-create__check-done" onClick={handleCancelLink} />
            <CheckDone className="popup-create__check-done" onClick={handleSaveLink} />
          </div>
        )}
      </div>
      <InputDate width="234px" height="40px" label="Дата" />
    </div>
  );
}
