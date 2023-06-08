import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="text-center h-32 flex items-center justify-between">
      <p className="text-xl text-gray-800 pl-20">
        <Link href="/privacy">
          <a>Privacy Policy</a>
        </Link>
      </p>
      <p className="text-xl text-gray-800">
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </p>
      <p className="text-xl text-gray-800 pr-20 ">&copy; {new Date().getFullYear()} 
        <span className="font-bold"> Zeynab</span>
      </p>
    </div>
  );
};

export default Footer;
