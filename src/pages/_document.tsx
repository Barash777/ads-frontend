import Header from '@/components/Header';
import Layout from '@/components/Layout';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        {/* <Layout> */}
        {/* <Header /> */}
        <Main />
        <NextScript />
        {/* </Layout> */}
      </body>
    </Html>
  );
}
