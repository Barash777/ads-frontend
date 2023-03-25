import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h1>About page</h1>
      <p>This app to create and find events</p>
      <Link href={'/'}>Home</Link>
    </div>
  );
};

export default AboutPage;
