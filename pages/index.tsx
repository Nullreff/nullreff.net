import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faTelegram,
    faGithub,
    faYoutube,
    faDiscord,
    faTwitch,
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nullreff</title>
        <meta name="description" content="The last time I checked, you were out dancing under the stars.  Since when is the internet a place to live your life..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.links}>
            <a href="mailto:contact@nullreff.net">
                <FontAwesomeIcon icon={faEnvelope} className="fa-4x"/>
            </a>
            <a href="https://t.me/nullreff">
                <FontAwesomeIcon icon={faTelegram} className="fa-4x"/>
            </a>
            <a href="https://discord.com/users/305191635833323520">
                <FontAwesomeIcon icon={faDiscord} className="fa-4x"/>
            </a>
            <a href="https://twitter.com/nullreff" >
                <FontAwesomeIcon icon={faTwitter} className="fa-4x"/>
            </a>
            <a href="https://www.youtube.com/channel/UCPxom8k6sGNrGIopdGIe-xw">
                <FontAwesomeIcon icon={faYoutube} className="fa-4x"/>
            </a>
            <a href="https://www.twitch.tv/nullreff">
                <FontAwesomeIcon icon={faTwitch} className="fa-4x"/>
            </a>
            <a href="https://github.com/nullreff/">
                <FontAwesomeIcon icon={faGithub} className="fa-4x"/>
            </a>
            <a href="https://vrchat.com/home/user/usr_cde58dad-0729-4c1d-a374-66b557a4ecb3">
                <img src="data:image/png;base64,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" alt="VRChaticon" width="65px" height="65px" />
            </a>
        </div>
          <pre className={styles.code}>
{`[guest@nullreff.net]$ head info.txt
 _   _       _ _           __  __                  _
| \\ | |_   _| | |_ __ ___ / _|/ _|      _ __   ___| |_
|  \\| | | | | | | '__/ _ \\ |_| |_      | '_ \\ / _ \\ __|
| |\\  | |_| | | | | |  __/  _|  _|  _  | | | |  __/ |_
|_| \\_|\\__,_|_|_|_|  \\___|_| |_|   (_) |_| |_|\\___|\\__|

This creature responds to Nullreff, Null, Alex or They/Them
Often seen following abandoned railroads in the Pacific Northwest
Be careful giving attention, they're only as real as you make them

[guest@nullreff.net]$ █`}
        </pre>
        {/*
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
          */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
