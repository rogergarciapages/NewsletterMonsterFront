'use client';

import React from 'react';
import { FaRegCopy } from 'react-icons/fa';

const EmailCopy = () => {

  const heading = "Simply copy our email";
  const email = "helloworld@newslettermonster.com";

  // Function to copy email to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    }, (err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-4xl font-bold mb-4">{heading}</h2>
      <div className="flex items-center">
        <input
          type="text"
          value={email}
          readOnly
          className="p-2 mr-2 text-lg border border-gray-300 rounded"
        />
        <button
          onClick={copyToClipboard}
          className="p-3 text-lg text-white bg-primary rounded hover:bg-gray-700"
        >
          <FaRegCopy className="text-2xl" />

        </button>
      </div>
    </div>
  );
};

export default EmailCopy;
