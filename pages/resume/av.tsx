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
import furduLogo from '../../public/images/furdu_logo.png'
import afcLogo from '../../public/images/afc_logo.png'
import nfcLogo from '../../public/images/nfc_logo.jpg'
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

            <Section title="Upcoming Events">
                <Job dates="July 3rd - 6th" title="Visuals Lead" company="Anthrocon" location="Pittsburgh, PA" logo={acLogo}>
                </Job>

                <Job dates="June 5th - 8th" title="Club AV Team" company="Furality 8" location="VRChat" logo={furalityLogo}>
                </Job>
            </Section>

            <Section title="2025">
                <Job dates="May 8th - 11th" title="Visuals Lead" company="Furry Weekend Atlanta" location="Atlanta, GA" logo={fwaLogo}>
                </Job>

                <Job dates="February 19th - 23rd" title="Visuals Tech" company="Nordic Fuzz Con" location="Malmö, Sweden" logo={nfcLogo}>
                </Job>

            </Section>

            <Section title="2024">
                <Job dates="October 14th - 17th" title="AV Crew" company="Biggest Little Fur Con" location="Reno, NV" logo={blfcLogo}>
                </Job>

                <Job dates="September 27th - 29th" title="Lighting Lead" company="Another Fur Con" location="Ontario, CA" logo={afcLogo}>
                </Job>

                <Job dates="July 4th - 7th" title="Visuals Lead" company="Anthrocon" location="Pittsburgh, PA" logo={acLogo}>
                </Job>

                <Job dates="June 6th - 9th" title="Club AV Team" company="Furality Umbra" location="VRChat" logo={furalityLogo}>
                </Job>

                <Job dates="May 8th - 13th" title="Visuals Lead" company="Furry Weekend Atlanta" location="Atlanta, GA" logo={fwaLogo}>
                </Job>

                <Job dates="April 19th - 21th" title="Visuals Lead" company="FurDU" location="Gold Coast, QLD" logo={furduLogo}>
                </Job>

                <Job dates="January 4th - 7th" title="Lighting Lead" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                </Job>
            </Section>

            <Section title="2023">
                <Job dates="December 23rd" title="Lighting & Visuals" company="Frostcon" location="VRChat" logo={waterwolfLogo}>
                </Job>

                <Job dates="October 30th - November 2nd" title="Lighting & Visuals Lead" company="Biggest Little Fur Con" location="Reno, NV" logo={blfcLogo}>
                </Job>

                <Job dates="October 21st" title="Visuals Tech" company="Anime Nebraskon Endshow" location="Council Bluffs, IA" logo={endshowLogo}>
                </Job>

                <Job dates="October 21st - 22nd" title="Lighting & Visuals Tech" company="Foxxcon Cyberpunk" location="VRChat" logo={waterwolfLogo}>
                </Job>

                <Job dates="June 29th - July 2nd" title="Visuals Lead" company="Anthrocon" location="Pittsburgh, PA" logo={acLogo}>
                </Job>

                <Job dates="June 2nd - 4th" title="Club AV Team" company="Furality Sylva" location="VRChat" logo={furalityLogo}>
                </Job>

                <Job dates="May 11th - 14th" title="Furality Gateway Staff" company="Furry Weekend Atlanta" location="Atlanta, GA" logo={furalityLogo}>
                </Job>

                <Job dates="May 11th - 14th" title="Visuals Lead" company="Furry Weekend Atlanta" location="Atlanta, GA" logo={fwaLogo}>
                </Job>

                <Job dates="April 5th" title="Lighting Consultant" company="Norwescon" location="Seattle, WA" logo={norwesconLogo}>
                </Job>

                <Job dates="February 25th" title="Lighting Designer / Operator" company="The Revelation Band @ Metropolist" location="Seattle, WA" logo={revelationBandLogo}>
                </Job>

                <Job dates="February 17th - 18th" title="Club AV Team" company="Furality Luma Festival" location="VRChat" logo={furalityLogo}>
                </Job>

                <Job dates="January 5th - 8th" title="Lighting Designer" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                </Job>
            </Section>
            <Section title="2022">
                <Job dates="June 2nd - 5th" title="Lighting & Visuals Operator" company="Biggest Little Fur Con" location="Reno, NV" logo={blfcLogo}>
                </Job>

                <Job dates="October 27th - 30th" title="AV Lead" company="Get Out the Float" location="Seaside, OR" logo={gotfLogo}>
                </Job>

                <Job dates="May 27th - 29th" title="Lighting Lead" company="Furlandia" location="Portland, OR" logo={furlandiaLogo}>
                </Job>
            </Section>
            <Section title="2021">
                <Job dates="November 18th - 21st" title="Lighting Lead" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                </Job>

                <Job dates="October 21st - 24th" title="Lighting Second" company="Biggest Little Fur Con" location="Reno, NV" logo={blfcLogo}>
                </Job>
            </Section>
            <Section title="2020">
                <Container>
                    ¯\_(ツ)_/¯
                </Container>
            </Section>
            <Section title="2019">
                <Job dates="November 21st - 24th" title="AV Lead" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                </Job>

                <Job dates="October 11th - 13th" title="AV Lead" company="Get Out the Float" location="Seaside, OR" logo={gotfLogo}>
                </Job>

                <Job dates="September 27th - 29th" title="AV Crew" company="Furvana" location="Ocean Shores, WA" logo={furvanaLogo}>
                </Job>

                <Job dates="August 2nd - 4th" title="Lighting Crew" company="Denfur" location="Denver, CO" logo={denfurLogo}>
                </Job>

                <Job dates="May 24th - 26th" title="AV Lead" company="Furlandia" location="Portland, OR" logo={furlandiaLogo}>
                </Job>

                <Job dates="May 16th - 19th" title="Lighting Crew" company="Biggest Little Fur Con" location="Reno, NV" logo={blfcLogo}>
                </Job>

                <Job dates="March 7th - 10th" title="Lighting Crew" company="Vancoufur" location="Vancouver, BC" logo={vancoufurLogo}>
                </Job>
            </Section>
            <Section title="2018">
                <Job dates="November 8th - 11th" title="AV Lead" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                </Job>

                <Job dates="August 24th - 26th" title="Lighting Crew" company="Denfur" location="Denver, CO" logo={denfurLogo}>
                </Job>

                <Job dates="May 27th - 29th" title="AV Lead" company="Furlandia" location="Portland, OR" logo={furlandiaLogo}>
                </Job>

                <Job dates="May 10th - 13th" title="Lighting Crew" company="Biggest Little Fur Con" location="Reno, NV" logo={blfcLogo}>
                </Job>

                <Job dates="March 8th - 11th" title="AV Lead" company="Vancoufur" location="Vancouver, BC" logo={vancoufurLogo}>
                </Job>
            </Section>
            <Section title="2017">
                <Job dates="November 9th - 12th" title="AV Lead" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                </Job>

                <Job dates="May 12th - 15th" title="Lighting Crew" company="Biggest Little Fur Con" location="Reno, NV" logo={blfcLogo}>
                </Job>

                <Job dates="May 26th - 28th" title="AV Lead" company="Furlandia" location="Portland, OR" logo={furlandiaLogo}>
                </Job>

                <Job dates="March 9th - 12th" title="AV Lead" company="Vancoufur" location="Vancouver, BC" logo={vancoufurLogo}>
                </Job>
            </Section>
            <Section title="2016">
                <Job dates="December 1st - 4th" title="Lighting Crew" company="Midwest Furfest" location="Rosemont, IL" logo={furfestLogo}>
                </Job>

                <Job dates="August 12th - 14th" title="Lighting Crew" company="Rocky Mountain Fur Con" location="Denver, CO" logo={rmfcLogo}>
                </Job>

                <Job dates="May 27th - 29th" title="AV Lead" company="Furlandia" location="Portland, OR" logo={furlandiaLogo}>
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
