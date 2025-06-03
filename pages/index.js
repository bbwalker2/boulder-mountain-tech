
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boulder Mountain Tech</title>
        <meta name="description" content="Your Modern Business Consulting Copilot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Empowering Innovation. Delivering Results.</h1>
        <p className={styles.description}>Boulder Mountain Tech is your modern business consulting copilot.</p>
        <button className={styles.button} onClick={() => alert('Showreel Modal Coming Soon')}>
          ▶ Play Showreel
        </button>
      </main>
    </div>
  )
}
