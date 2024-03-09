import './InfoTooltipError.css';

import IconError from '../../assets/iconX.svg?react';

interface InfoTooltipProps {
  isVisible?: boolean;
  messageTitle?: string;
}

export default function InfoTooltip({ isVisible, messageTitle }: InfoTooltipProps) {
  return (
    <section className={`info-tooltip-error ${isVisible ? 'info-tooltip_visible' : ''} `}>
      <IconError className="info-tooltip__img" />
      <div style={{ width: '214px' }}>
        <h3 className="info-tooltip__tittle-false">{messageTitle}</h3>
      </div>
    </section>
  );
}
