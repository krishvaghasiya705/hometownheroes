import React from "react";

function Closeicon({ onClick }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M13 13L3 3M13 13L23 23M13 13L23 3M13 13L3 23"
        stroke="#F6F1E5"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Closeicon;
