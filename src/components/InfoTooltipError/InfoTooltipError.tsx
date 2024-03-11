import './InfoTooltipError.css';

import IconError from '../../assets/iconX.svg?react';
import { useEffect, useState } from 'react';

interface InfoTooltipProps {
  isVisible?: boolean;
  messageTitle?: string;
  messagesubTitle?: string;
}

export default function InfoTooltipError({
  isVisible,
  messageTitle,
  messagesubTitle
}: InfoTooltipProps) {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  if (!visible) {
    return null;
  }
  return (
    <section className={`info-tooltip-error ${isVisible ? 'info-tooltip_visible' : ''} `}>
      <IconError className="info-tooltip__img" />
      <div style={{ width: '214px' }}>
        <h3 className="info-tooltip__tittle-false">{messageTitle}</h3>
        <p className="info-tooltip__subtittle-false"> {messagesubTitle}</p>
      </div>
    </section>
  );
}
