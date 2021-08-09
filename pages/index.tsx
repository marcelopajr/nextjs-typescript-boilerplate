import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS and TypeScript Boilerplate</title>
        <meta name="description" content="NextJS and TypeScript Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello World</h1>
      </main>
    </div>
  );
}
