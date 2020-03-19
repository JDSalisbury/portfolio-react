import React from 'react';

function ColorBar({ children, color }) {
  return (
    <section
      style={{
        height: '400px',
        backgroundColor: `${color}`,
      }}
    >
      {children}
    </section>
  );
}

export default ColorBar;
