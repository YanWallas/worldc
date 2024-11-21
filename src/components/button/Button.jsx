import React from 'react';

function Button({ clickHandler, label }) {
  return (
    <button
      onClick={clickHandler}
      className="bg-gradient-to-r from-btnPrimary1 to-btnPrimary2 hover:from-btnPrimaryHover1 hover:to-btnPrimaryHover2 hover:text-bg1 px-4 py-2 rounded-md duration-200 hover:ring-2 hover:ring-bg1"
    >
      {label}
    </button>
  );
}

export default Button;
