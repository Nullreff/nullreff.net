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

import background from '../public/images/home_background.jpg'
import vrchat from '../public/images/vrchat.png'
import localFont from 'next/font/local'

const DSEG7ClassicFont = localFont({src: 'fonts/DSEG7Classic-BoldItalic-nullreff-edit.woff2' })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nullreff</title>
        <meta name="description" content="The last time I checked, you were out dancing under the stars.  Since when is the internet a place to live your life..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className={styles.bgWrap}>
        <Image
            alt="Lake"
            src={background}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{objectFit: 'cover'}}
          />
    </div>
      <main className={styles.main}>
        <div className={DSEG7ClassicFont.className}>
          nullreff
        </div>
        <div>
          <div>
            I&apos;m only as real as you make me<br/>
            They/Them・32・Wuff・NB/Ace<br/>
            Fursuiting・Exploring・A/V Crew・VR
          </div>
        </div>
        <div className={styles.socialLinks}>
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
                <Image src={vrchat} alt="VRChat Icon" width="80" height="80" />
            </a>
        </div>
        {/*
          <pre className={styles.code}>
{`[guest@nullreff.net]$ head info.txt

This creature responds to Nullreff, Null, Alex or They/Them
Often seen following abandoned railroads in the Pacific Northwest
Be careful giving attention, they're only as real as you make them

[guest@nullreff.net]$ █`}
        </pre>
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

 _   _       _ _           __  __                  _
| \\ | |_   _| | |_ __ ___ / _|/ _|      _ __   ___| |_
|  \\| | | | | | | '__/ _ \\ |_| |_      | '_ \\ / _ \\ __|
| |\\  | |_| | | | | |  __/  _|  _|  _  | | | |  __/ |_
|_| \\_|\\__,_|_|_|_|  \\___|_| |_|   (_) |_| |_|\\___|\\__|
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
