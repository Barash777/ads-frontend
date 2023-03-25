import Head from 'next/head';
import React from 'react';

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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
