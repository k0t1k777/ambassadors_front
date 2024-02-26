import "./InfoTooltip.css";
import iconOK from "../../assets/IconOK.svg";
import iconX from "../../assets/iconX.svg";

interface InfoTooltipProps {
  isVisible: boolean;
  isSuccessfull: boolean;
  customMessage: string;
}

export default function InfoTooltip({ isVisible, isSuccessfull, customMessage }: InfoTooltipProps) {

  const messageTitle = isSuccessfull ? "Мерч отправлен" : "Такой промокод уже существует";

  return (
    <section
      className={`info-tooltip ${isVisible ? "visible" : ""} ${
        isSuccessfull ? "" : "info-tooltip__type_false"
      }`}
    >
      <img
        src={isSuccessfull ? iconOK : iconX}
        className="info-tooltip__img"
        alt="Результат операции"
      />
      <div style={{ width: "214px" }}>
        <h3
          className={`${
            isSuccessfull
              ? "info-tooltip__tittle-true"
              : "info-tooltip__tittle-false"
          }`}
        >
          {messageTitle}
        </h3>
        <p
          className={`${
            isSuccessfull
              ? "info-tooltip__paragraph-true"
              : "info-tooltip__paragraph-false"
          }`}
        >
          {customMessage}
        </p>
      </div>
    </section>
  );
}

