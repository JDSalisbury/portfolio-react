import React from 'react';
import Navbar from './components/navbar.js';

function Content({ children }) {
  return (
    <div className="content">
      <Navbar />
      {children}
    </div>
  );
}

export default Content;
