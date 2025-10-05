import React from 'react';

function HoverUnderline({
  width = 48,
  color = 'rgba(0, 0, 0, 0.5)',
  opacity = 0.5,
  thickness = 1,
  fullWidth = false,
  className = '',
  addMargin=true
}) {
  const computedWidth = fullWidth ? '100%' : `${width}px`;

  return (
    <hr
      role="presentation"
      className={`m-0 border-0 ${className}`}
      style={{
        width: computedWidth,
        height: 0,
        opacity,
        borderTopStyle: 'solid',
        borderTopWidth: thickness,
        borderTopColor: color,
        margin:addMargin ? "50px 0" : 0
      }}
    />
  );
}

export default HoverUnderline;

