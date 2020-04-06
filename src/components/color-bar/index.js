import React from "react";

function ColorBar({ children, color, height }) {
  return (
    <section
      style={{
        height: `${height}`,
        backgroundColor: `${color}`,
      }}
    >
      {children}
    </section>
  );
}

export default ColorBar;
