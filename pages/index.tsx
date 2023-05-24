import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SocialLink from '../components/home/social-link';
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
  faCamera,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

import background from '../public/images/home_background.jpg'
import vrchat from '../public/images/vrchat.png'
import localFont from 'next/font/local'

const DSEG7ClassicFont = localFont({src: 'fonts/DSEG7Classic-BoldItalic-nullreff-edit.woff2' })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nullreff</title>
        <meta name="description" content="The last time I checked, you were out dancing under the stars.  Since when is the internet a place to live your life..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div>
        <Image
            alt="Lake"
            src={background}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{objectFit: 'cover', zIndex: -1}}
          />
    </div>
      <main className="container mx-auto text-center text-white">
        <div className="text-6xl sm:text-8xl pt-10 leading-2">
          <div >
            <span className={DSEG7ClassicFont.className}>null&#8203;reff</span>
          </div>
        </div>
        <div className="">
            <SocialLink icon={faEnvelope} name="Email" link="mailto:contact@nullreff.net" className="inline"></SocialLink>
            <SocialLink icon={faTelegram} name="Telegram" link="https://t.me/nullreff" className="Inline"></SocialLink>
            <SocialLink icon={faDiscord} name="Discord" link="https://discord.com/users/305191635833323520"></SocialLink>
            <SocialLink icon={faTwitter} name="Twitter" link="https://twitter.com/nullreff"></SocialLink>
            <SocialLink icon={faMastodon} name="Mastodon" link="https://meow.social/@nullreff" ></SocialLink>
            <SocialLink icon={faYoutube} name="Youtube" link="https://www.youtube.com/channel/UCPxom8k6sGNrGIopdGIe-xw"></SocialLink>
            <SocialLink icon={faTwitch} name="Twitch" link="https://www.twitch.tv/nullreff"></SocialLink>
            <SocialLink icon={faGithub} name="Github" link="https://github.com/nullreff/"></SocialLink>
            <SocialLink image={vrchat} name="VRChat" link="https://vrchat.com/home/user/usr_cde58dad-0729-4c1d-a374-66b557a4ecb3"></SocialLink>
        </div>
      </main>
      <footer className="absolute bottom-0 left-0 my-5 px-3 py-1 bg-slate-50/75 rounded-r-full">
        <div className="text-blue drop-shadow">
          <a href="https://twitter.com/tailrecur/">
            <FontAwesomeIcon icon={faCamera} className="inline"/>
            &nbsp;by @tailrecur
          </a>
        </div>
      </footer>
    </div>
  )
}
