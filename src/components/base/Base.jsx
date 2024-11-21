import React from 'react';
import Header from '../header/Header';

function Base({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Base;
