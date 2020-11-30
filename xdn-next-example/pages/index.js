import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>XDN Next App Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          This is an example Next.js app powered by Moovweb XDN.
          Click a category above to get started.
        </p>
      </main>
    </div>
  )
}
