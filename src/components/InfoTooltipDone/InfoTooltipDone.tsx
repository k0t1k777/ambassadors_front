import './InfoTooltipDone.css';
import IconDone from '../../assets/IconOK.svg?react';

interface InfoTooltipProps {
  isVisible?: boolean;
  isSuccessfull?: boolean;
  messageTitle?: string;
}

export default function InfoTooltip({ isVisible, messageTitle }: InfoTooltipProps) {
  return (
    <section className={`info-tooltip ${isVisible ? 'info-tooltip_visible' : ''} `}>
      <IconDone className="info-tooltip__img" />

      <div style={{ width: '214px' }}>
        <h3 className="info-tooltip__tittle-true">{messageTitle}</h3>
      </div>
    </section>
  );
}
