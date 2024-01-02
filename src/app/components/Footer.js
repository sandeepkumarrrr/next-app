'use client';
// Import necessary libraries and components
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-boxdark shadow">
     <div className="container mx-auto py-4 px-4 items-center justify-between shadow">
        <div className="text-center text-gray-500 dark:text-gray-400">
          {/* Add any additional information or links here */}
          &copy; 2024 Your Admin Dashboard. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
