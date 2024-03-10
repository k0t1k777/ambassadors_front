import InputContentText from '../InputContentText/InputContentText';
import InputDate from '../InputDate/InputDate';
import ContentChecked from '../Main/Content/ContentChecked/ContentChecked';
import CheckDone from '../../assets/Checkbox.svg?react';
import Cancel from '../../assets/Close_mini.svg?react';
import './InputPopupContentFields.css';
import { useEffect, useState } from 'react';

interface InputPopupContentFieldsProps {
  numberOfInputs: number;
  incrementCount?: () => void;
  decrementCount?: () => void;
  fileValue: string;
  linkValue: string;
  onChangeFile?: (value: string) => void;
  onChangeLink?: (value: string) => void;
  updateData?: () => void;
  setLinkValue: any;
  setFileValue: any;
}

export default function InputPopupContentFields({
  numberOfInputs,
  incrementCount,
  decrementCount,
  fileValue,
  linkValue,
  onChangeFile,
  onChangeLink,
  setLinkValue,
  setFileValue,
}: // updateData
InputPopupContentFieldsProps) {
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  const [isFileClicked, setIsFileClicked] = useState(false);

  const isFieldFilled = fileValue || linkValue;

  const [inputLinkValue, setInputLinkValue] = useState(linkValue);
  const [inputFileValue, setInputFileValue] = useState(fileValue);

  useEffect(() => {
    setFileValue(inputFileValue);
    setLinkValue(inputLinkValue);
  }, [inputFileValue, inputLinkValue]);

  const handleSaveLink = () => {
    setIsLinkClicked(false);
    // updateData();
    console.log('Сохранение данных публикации', linkValue);
    onChangeLink && onChangeLink(inputLinkValue);
  };

  const handleCancelLink = () => {
    setIsLinkClicked(false);
    console.log('Отмена');
    setLinkValue('');
  };

  const handleSaveFile = () => {
    setIsFileClicked(false);
    // updateData();
    console.log('Сохранение данных ссылки', fileValue);
    onChangeFile && onChangeFile(inputFileValue);
  };

  const handleCancelFile = () => {
    setIsFileClicked(false);
    console.log('Отмена');
    setFileValue('');
  };

  return (
    <div className='popup-create__input'>
      <div className='popup-input__container'>
        <div
          className='popup-create__container popup-create__checkbox'
          onClick={() => setIsLinkClicked(!isLinkClicked)}
        >
          <ContentChecked
            value={isFieldFilled}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        </div>
        <InputContentText
          label={`Публикация ${numberOfInputs}`}
          width={isLinkClicked ? '247px' : '273px'}
          margin={!isLinkClicked ? '0 66px 0 0' : '0'}
          placeholder='Вставьте ссылку'
          value={inputLinkValue}
          onChange={(value) => {
            setInputLinkValue(value);
            onChangeLink && onChangeLink(value);
          }}
          onClick={() => setIsLinkClicked(true)}
        />

        {isLinkClicked && (
          <div className='popup-create__container popup-create__icon'>
            <Cancel
              className='popup-create__check-done'
              onClick={handleCancelLink}
            />
            <CheckDone
              className='popup-create__check-done'
              onClick={handleSaveLink}
            />
          </div>
        )}
      </div>
      <div className='popup-input__container'>
        <InputContentText
          label='Ссылка на файл'
          width={isFileClicked ? '247px' : '273px'}
          margin={!isFileClicked ? '0 66px 0 0' : '0'}
          placeholder='Вставьте ссылку'
          value={inputFileValue}
          onChange={(value) => {
            setInputFileValue(value);
            onChangeFile && onChangeFile(value);
          }}
          onClick={() => setIsFileClicked(true)}
        />

        {isFileClicked && (
          <div className='popup-create__container popup-create__icon'>
            <Cancel
              className='popup-create__check-done'
              onClick={handleCancelFile}
            />
            <CheckDone
              className='popup-create__check-done'
              onClick={handleSaveFile}
            />
          </div>
        )}
      </div>
      <InputDate width='234px' height='40px' label='Дата' />
    </div>
  );
}
