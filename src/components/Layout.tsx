import Head from 'next/head';
import React, { useMemo } from 'react';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';

type LayoutProps = {
  title?: string;
  keywords?: string;
  description?: string;
  children?: React.ReactNode;
};

const Layout = ({
  title = 'Ads | find everything you need',
  keywords = 'ad, ads',
  description = 'Ads for everybody',
  children,
}: LayoutProps) => {
  //   const headerJSX = useMemo(() => <Header />, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {/* <Showcase /> */}
      <div className='container mx-auto px-4'>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
