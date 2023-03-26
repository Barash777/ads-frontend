import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 z-20 w-full rounded-lg shadow m-4 '>
      <div className='w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-900 sm:text-center '>
          © 2023 All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-semibold leading-6 text-gray-900 sm:mt-0'>
          <li>
            <Link href='/about' className='link md:mr-6'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
