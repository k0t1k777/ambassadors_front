import InputContentTextProps from '../InputContentText/InputContentText';
import InputDate from '../InputDate/InputDate';
import InputChecked from '../InputChecked/InputChecked';
import CheckDone from '../../assets/Checkbox.svg?react';
import Cancel from '../../assets/Close_mini.svg?react';
import './InputPopupContentFields.css';

interface InputPopupContentFieldsProps {
  isPublicationClicked: boolean;
  inputPublicationValue: string;
  setInputPublicationValue: React.Dispatch<React.SetStateAction<string>>;
  handleInputPublicationClick: () => void;
  handleDonePublicationClick: () => void;
  handleCancelPublicationClick: () => void;
  isLinkClicked: boolean;
  inputLinkValue: string;
  setInputLinkValue: React.Dispatch<React.SetStateAction<string>>;
  handleInputLinkClick: () => void;
  handleDoneLinkClick: () => void;
  handleCancelLinkClick: () => void;
}

export default function InputPopupContentFields({
  isPublicationClicked,
  inputPublicationValue,
  setInputPublicationValue,
  handleInputPublicationClick,
  handleDonePublicationClick,
  handleCancelPublicationClick,
  isLinkClicked,
  inputLinkValue,
  setInputLinkValue,
  handleInputLinkClick,
  handleDoneLinkClick,
  handleCancelLinkClick
}: InputPopupContentFieldsProps) {
  return (
    <div className="popup-create__input">
      <div className="popup-input__container ">
        <div className="popup-create__container popup-create__checkbox">
          <InputChecked />
        </div>
        <InputContentTextProps
          label="Публикация 1"
          width={isPublicationClicked ? '247px' : '273px'}
          margin={!isPublicationClicked ? '0 66px 0 0' : '0'}
          placeholder="Вставьте ссылку"
          value={inputPublicationValue}
          setValue={setInputPublicationValue}
          onClick={handleInputPublicationClick}
        />

        {isPublicationClicked && (
          <div className="popup-create__container popup-create__icon ">
            <Cancel className="popup-create__check-done" onClick={handleCancelPublicationClick} />
            <CheckDone className="popup-create__check-done" onClick={handleDonePublicationClick} />
          </div>
        )}
      </div>
      <div className="popup-input__container ">
        <InputContentTextProps
          label="Ссылка на файл"
          width={isLinkClicked ? '247px' : '273px'}
          margin={!isLinkClicked ? '0 66px 0 0' : '0'}
          placeholder="Вставьте ссылку"
          value={inputLinkValue}
          setValue={setInputLinkValue}
          onClick={handleInputLinkClick}
        />

        {isLinkClicked && (
          <div className="popup-create__container popup-create__icon ">
            <Cancel className="popup-create__check-done" onClick={handleCancelLinkClick} />
            <CheckDone className="popup-create__check-done" onClick={handleDoneLinkClick} />
          </div>
        )}
      </div>
      <InputDate width="234px" height="40px" label="Дата" />
    </div>
  );
}
