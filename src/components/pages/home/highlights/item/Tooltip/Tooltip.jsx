import React, { useState } from 'react';

import './Tooltip.css';

/*
Tooltip component:
Shows a tooltip, for a wrapped JSX/HTML content. Tooltip is by default positioned top, 
has text 'Tooltip' and takes 400 ms to appear.
Param: content (tooltip content to show), position (default as top).
Usage: Wrap around JSX component and specify the tooltip content and other 
*/

const Tooltip = (props) => {
  const [visible, setVisible] = useState(false);

  let timeoutAppear;

  const showTooltip = () => {
    timeoutAppear = setTimeout(() => {
      setVisible(true);
    }, props.delay || 100);
  };

  const hideTooltip = () => {
    clearInterval(timeoutAppear);
    setVisible(false);
  };

  return (
    /* Wrap the content with tooltip. So using a wrapper class. */
    <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {/* Content to which tooltip belongs is shown. */}
      {props.children}

      {/* Show Tooltip content only if visible option set to true. */}
      {visible && (
        <div className={`Tooltip-Tip ${props.direction || 'top'} `}>
          {props.content || 'Tooltip'}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
