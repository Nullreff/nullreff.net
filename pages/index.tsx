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
    faMastodon,
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
        <div className="text-center">
            <a href="mailto:contact@nullreff.net">
                <FontAwesomeIcon icon={faEnvelope} className="fa-4x inline"/>
            </a>
            <a href="https://t.me/nullreff">
                <FontAwesomeIcon icon={faTelegram} className="fa-4x inline"/>
            </a>
            <a href="https://discord.com/users/305191635833323520">
                <FontAwesomeIcon icon={faDiscord} className="fa-4x inline"/>
            </a>
            <a href="https://twitter.com/nullreff" >
                <FontAwesomeIcon icon={faTwitter} className="fa-4x inline"/>
            </a>
            <a href="https://meow.social/@nullreff" >
                <FontAwesomeIcon icon={faMastodon} className="fa-4x inline"/>
            </a>
            <a href="https://www.youtube.com/channel/UCPxom8k6sGNrGIopdGIe-xw">
                <FontAwesomeIcon icon={faYoutube} className="fa-4x inline"/>
            </a>
            <a href="https://www.twitch.tv/nullreff">
                <FontAwesomeIcon icon={faTwitch} className="fa-4x inline"/>
            </a>
            <a href="https://github.com/nullreff/">
                <FontAwesomeIcon icon={faGithub} className="fa-4x inline"/>
            </a>
            <a href="https://vrchat.com/home/user/usr_cde58dad-0729-4c1d-a374-66b557a4ecb3">
                <Image src={vrchat} alt="VRChat Icon" width="80" height="80" className="inline" />
            </a>
        </div>
      </main>
    </div>
  )
}
