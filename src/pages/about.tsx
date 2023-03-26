import Layout from '@/components/Layout';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <Layout title='About Ads'>
      <h1>About page</h1>
      <p>This app to create and find events</p>
      <Link href={'/'}>Home</Link>
    </Layout>
  );
};

export default AboutPage;
