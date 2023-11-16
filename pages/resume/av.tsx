import Head from 'next/head'
import Layout from '../../components/layout';
import Section from '../../components/resume/section';
import Job from '../../components/resume/job';
import styles from '../styles/Resume.module.css'
import {
    faGit,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import IconLink from '../../components/resume/icon-link';
import unityLogo from '../../public/images/unity_logo.jpg'
import soaLogo from '../../public/images/soa_logo.jpg'
import uwLogo from '../../public/images/uw_logo.jpg'
import fwaLogo from '../../public/images/fwa_2023_logo.jpg'
import furalityLogo from '../../public/images/furality_logo.png'
import anwLogo from '../../public/images/anw_logo.png'
import acLogo from '../../public/images/anthrocon_logo.png'
import blfcLogo from '../../public/images/blfc_logo.png'
import revelationBandLogo from '../../public/images/the_revelation_band_logo.jpg'
import norwesconLogo from '../../public/images/norwescon_logo.png'
import gotfLogo from '../../public/images/gotf_logo.png'
import furlandiaLogo from '../../public/images/furlandia_logo.png'
import furvanaLogo from '../../public/images/furvana_logo.png'
import denfurLogo from '../../public/images/denfur_logo.png'
import vancoufurLogo from '../../public/images/vancoufur_logo.png'
import furfestLogo from '../../public/images/furfest_logo.png'
import rmfcLogo from '../../public/images/rmfc_logo.png'
import endshowLogo from '../../public/images/endshow_elevative.png'
import waterwolfLogo from '../../public/images/waterwolf_logo.png'
import alexIcon from '../../public/images/alex_icon.jpg'
import Container from '../../components/resume/container';

export default function AVResume() {
  return (
    <div className="container mx-auto">
        <Layout>
            <Head>
                <title>Nullreff</title>
            </Head>

            <div className="text-center m-5">
                <h1 className="text-6xl">Nullreff</h1>
                <p className="text-2xl mt-2">
                    <IconLink title="Email" icon={faEnvelope} link="mailto:resume@nullreff.net" />
                </p>
            </div>

            <Section title="Qualifications">
                <Container>
                    <ul className="list-disc mx-5">
                        <li>
                            Deep understanding of lighting design, equipment, programming and operation.
                            Competent working as crew for audio and video as well.
                            Passion for making the &quot;magic&quot; happen for attendees.
                            Received multiple staff awards for work as AV Lead at Furlandia, Vancoufur and Anthro Northwest.
                        </li>

                        <li>
                            Experience recruiting and orgnaizing large groups of volunteers to make an event happen.
                            Ability to balance complex constraints of events and make everythign work.
                            Calculated budgets, did the spreadsheets and made the designs pretty.
                            Spent time training volunteers of all skill levels on how to set up and run lights.
                            Did something go wrong? I&apos;ve been know to be pretty good at solving unexpected problems.
                            I seem to get along well with most people.
                        </li>

                        <li>
                            Extensive experience programming and operating Chamsys.
                            Some experience operating GrandMA and Hog.
                            Understanding of DMX, Artnet and related protocols.
                            Experience designing lighting rigs to fit various budgets and requirements.
                            Operated lighting for concerts, dances and stage productions.
                            Competent in busking live shows and &quot;playing along&quot; with a DJ or musician.
                        </li>

                        <li>
                            Experience using Yamaha CL5 and LS9 boards.
                            Created shows in QLab for audio playback during events.
                            Operated sound board for live music (with assistance).
                            Provided audio playback during scripted events.
                        </li>

                        <li>
                            Experience working with NewTek Tricaster and Blackmagic ATEM.
                            Operated video switcher during dances.
                            Provided video playback during various events.
                        </li>
                    </ul>
                </Container>
            </Section>

            <Section title="Upcoming">
                <Job dates="" title="Lighting & Visuals Lead" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                </Job>

            </Section>

            <Section title="2023">
                <Job dates="" title="Lighting & Visuals Lead" company="Biggest Little Fur Con" location="Reno, NV" logo={blfcLogo}>
                </Job>

                <Job dates="" title="Visuals" company="Anime Nebraskon Endshow" location="Council Bluffs, IA" logo={endshowLogo}>
                </Job>

                <Job dates="" title="Lighting & Visuals" company="Foxxcon Cyberpunk" location="VRChat" logo={waterwolfLogo}>
                </Job>

                <Job dates="" title="Visuals Lead" company="Anthrocon" location="Pittsburgh, PA" logo={acLogo}>
                </Job>

                <Job dates="" title="Club AV Team" company="Furality Sylva" location="VRChat" logo={furalityLogo}>
                </Job>

                <Job dates="" title="Furality Gateway Staff" company="Furry Weekend Atlanta" location="Atlanta, GA" logo={furalityLogo}>
                </Job>

                <Job dates="" title="Visuals Lead" company="Furry Weekend Atlanta" location="Atlanta, GA" logo={fwaLogo}>
                </Job>

                <Job dates="April 5th 2023" title="Lighting Consultant" company="Norwescon" location="Seattle, WA" logo={norwesconLogo}>
                </Job>

                <Job dates="Feb 25th 2023" title="Lighting Designer / Operator" company="The Revelation Band @ Metropolist" location="Seattle, WA" logo={revelationBandLogo}>
                    https://www.facebook.com/revelationbandwa/posts/pfbid07EytnNhQr8AvUidNb67S9rMQWxhGp3NhKtqY7hS34o3v87mXhK4hn5GtaKK2WT4Fl
                    https://www.facebook.com/revelationbandwa/posts/pfbid053rvdhpr4pr57CPnhZuozmPULWVzTrTHeQWJwCXXbG3AjrQgBw9GzDqR2GCWnFsGl
                </Job>

                <Job dates="" title="Club AV Team" company="Furality Luma Festival" location="VRChat" logo={furalityLogo}>
                </Job>

                <Job dates="" title="Lighting Designer" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                </Job>
            </Section>
            <Section title="2022">
                <Job dates="" title="Lighting & Visuals Operator" company="Biggest Little Fur Con" location="Reno, NV" logo={blfcLogo}>
                </Job>

                <Job dates="" title="AV Lead" company="Get Out the Float" location="Seaside, OR" logo={gotfLogo}>
                </Job>

                <Job dates="" title="Lighting Lead" company="Furlandia" location="Portland, OR" logo={furlandiaLogo}>
                </Job>
            </Section>
            <Section title="2021">
                <Job dates="" title="Lighting Lead" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                </Job>

                <Job dates="" title="Lighting Second" company="Biggest Little Fur Con" location="Reno, NV" logo={blfcLogo}>
                </Job>
            </Section>
            <Section title="2020">
                <Container>
                    ¯\_(ツ)_/¯
                </Container>
            </Section>
            <Section title="2019">
                <Job dates="" title="AV Lead" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                </Job>

                <Job dates="" title="AV Lead" company="Get Out the Float" location="Seaside, OR" logo={gotfLogo}>
                </Job>

                <Job dates="" title="AV Crew" company="Furvana" location="Ocean Shores, WA" logo={furvanaLogo}>
                </Job>

                <Job dates="" title="Lighting Crew" company="Denfur" location="Denver, CO" logo={denfurLogo}>
                </Job>

                <Job dates="" title="AV Lead" company="Furlandia" location="Portland, OR" logo={furlandiaLogo}>
                </Job>

                <Job dates="" title="Lighting Crew" company="Biggest Little Fur Con" location="Reno, NV" logo={blfcLogo}>
                </Job>

                <Job dates="" title="Lighting Crew" company="Vancoufur" location="Vancouver, BC" logo={vancoufurLogo}>
                </Job>
            </Section>
            <Section title="2018">
                <Job dates="" title="AV Lead" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                </Job>

                <Job dates="" title="Lighting Crew" company="Denfur" location="Denver, CO" logo={denfurLogo}>
                </Job>

                <Job dates="" title="AV Lead" company="Furlandia" location="Portland, OR" logo={furlandiaLogo}>
                </Job>

                <Job dates="" title="Lighting Crew" company="Biggest Little Fur Con" location="Reno, NV" logo={blfcLogo}>
                </Job>

                <Job dates="" title="AV Lead" company="Vancoufur" location="Vancouver, BC" logo={vancoufurLogo}>
                </Job>
            </Section>
            <Section title="2017">
                <Job dates="" title="AV Lead" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                </Job>

                <Job dates="" title="Lighting Crew" company="Biggest Little Fur Con" location="Reno, NV" logo={blfcLogo}>
                </Job>

                <Job dates="" title="AV Lead" company="Furlandia" location="Portland, OR" logo={furlandiaLogo}>
                </Job>

                <Job dates="" title="AV Lead" company="Vancoufur" location="Vancouver, BC" logo={vancoufurLogo}>
                </Job>
            </Section>
            <Section title="2016">
                <Job dates="" title="Lighting Crew" company="Midwest Furfest" location="Rosemont, IL" logo={furfestLogo}>
                </Job>

                <Job dates="" title="Lighting Crew" company="Rocky Mountain Fur Con" location="Denver, CO" logo={rmfcLogo}>
                </Job>

                <Job dates="" title="AV Lead" company="Furlandia" location="Portland, OR" logo={furlandiaLogo}>
                </Job>
            </Section>
            <div className="text-center m-5">
                <a href="https://nullreff.net/resume/av/">
                    Most recent version at https://nullreff.net/resume/av/
                </a>
            </div>
        </Layout>
    </div>
  )
}
