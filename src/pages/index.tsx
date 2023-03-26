// import Head from 'next/head';
// import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <Layout>
      <main>
        <h1 className={`${inter.className} text-4xl font-bold underline`}>
          Home
        </h1>
        <div></div>
      </main>
    </Layout>
  );
}
