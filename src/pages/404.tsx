import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <Layout title='Page not found'>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-2xl'>Page not found</p>
        <p>
          <Link href='/' className='link'>
            Home
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
