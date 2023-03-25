// import Head from 'next/head';
// import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function HomePageAsad() {
  return (
    <Layout>
      <main>
        <h1 className='text-4xl font-bold underline'>Home</h1>
        <div>
          <Link href={'/about'} className={inter.className}>
            About
          </Link>
          <Link href={'/events'} className={inter.className}>
            Events
          </Link>
        </div>
      </main>
    </Layout>
  );
}
