import Head from 'next/head'
import Image from 'next/image'
import SocialLink from '../components/home/social-link';
import VRChatLogo from '../components/home/vrchat-logo';
import NullreffLogo from '../components/home/nullreff-logo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faTelegram,
    faGithub,
    faYoutube,
    faDiscord,
    faTwitch,
    faMastodon,
    faBluesky,
} from '@fortawesome/free-brands-svg-icons'
import {
  faCamera,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

import background from '../public/images/home_background.jpg'

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
            priority={true}
            fill
            sizes="100vw"
            style={{objectFit: 'cover', zIndex: -1}}
          />
    </div>
      <main className="container mx-auto text-center text-white">
        <div className="text-6xl sm:text-8xl pt-10 leading-2">
          <NullreffLogo />
        </div>
        <div className="max-w-sm sm:max-w-2xl mx-auto grid grid-cols-5 sm:grid-cols-10">
            <SocialLink icon={faBluesky} name="Bluesky" link="https://bsky.app/profile/nullreff.net"></SocialLink>
            <SocialLink icon={faMastodon} name="Mastodon" link="https://meow.social/@nullreff"></SocialLink>
            <SocialLink icon={faTwitter} name="Twitter" link="https://twitter.com/nullreff"></SocialLink>
            <SocialLink icon={faYoutube} name="Youtube" link="https://www.youtube.com/channel/UCPxom8k6sGNrGIopdGIe-xw"></SocialLink>
            <SocialLink icon={faTwitch} name="Twitch" link="https://www.twitch.tv/nullreff"></SocialLink>
            <SocialLink icon={faTelegram} name="Telegram" link="https://t.me/nullreff"></SocialLink>
            <SocialLink icon={faDiscord} name="Discord" link="https://discord.com/users/305191635833323520"></SocialLink>
            <SocialLink icon={faGithub} name="Github" link="https://github.com/nullreff/"></SocialLink>
            <SocialLink icon={faEnvelope} name="Email" link="mailto:website@nullreff.net"></SocialLink>
            <SocialLink name="VRChat" link="https://vrch.at/usr_cde58dad-0729-4c1d-a374-66b557a4ecb3">
              <VRChatLogo className="svg-inline--fa inline m-2 drop-shadow hover:drop-shadow-2xl hover:scale-125 transition-all duration-100 fa-3x" />
            </SocialLink>
        </div>
      </main>
      <footer className="absolute bottom-0 left-0 my-5 px-3 py-1 bg-slate-50/75 rounded-r-full">
        <div className="text-blue drop-shadow">
          <a href="https://www.furtrack.com/index/photographer:smiles">
            <FontAwesomeIcon icon={faCamera} className="inline"/>
            &nbsp;by Smiles
          </a>
        </div>
      </footer>
    </div>
  )
}
