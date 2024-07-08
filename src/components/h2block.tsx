// components/TextBlock.js
import React from 'react';

const H2TextBlock = ({ heading, text }) => {
  return (
    <div className="my-4 p-4">
      <h2 className="text-2xl font-bold mb-2">{heading}</h2>
      <p className="text-base text-gray-700">{text}</p>
    </div>
  );
};

export default H2TextBlock;