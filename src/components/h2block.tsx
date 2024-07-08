// components/TextBlock.js
import React from 'react';

const H2TextBlock = ({ heading, text }) => {
  return (
    <div className="my-4 p-4">
      <h2 className="text-4xl text-center font-bold mb-2">{heading}</h2>
      <p className="text-2xl text-center text-gray-100">{text}</p>
    </div>
  );
};

export default H2TextBlock;