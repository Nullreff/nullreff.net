import Head from 'next/head'
import Layout from '../components/layout';
import Section from '../components/resume/section';
import Job from '../components/resume/job';
import styles from '../styles/Resume.module.css'
import {
    faGit,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import IconLink from '../components/resume/icon-link';
import unityLogo from '../public/images/unity_logo.jpg'
import soaLogo from '../public/images/soa_logo.jpg'
import uwLogo from '../public/images/uw_logo.jpg'
import fwaLogo from '../public/images/fwa_2023_logo.jpg'
import furalityLogo from '../public/images/furality_logo.png'
import anwLogo from '../public/images/anw_logo.png'
import alexIcon from '../public/images/alex_icon.jpg'
import Container from '../components/resume/container';

export default function Resume() {
  return (
    <div className="container mx-auto">
        <Layout>
            <Head>
                <title>Ryan Mendivil - Resume</title>
            </Head>

            <div className="text-center">
                <h1 className="text-6xl">Ryan Mendivil</h1>
                <p className="text-2xl mt-2">
                    <IconLink title="Email" icon={faEnvelope} link="mailto:resume@nullreff.net" />・
                    <IconLink title="Github" icon={faGithub} link="https://github.com/nullreff/" />・
                    <IconLink title="Linkedin" icon={faEnvelope} link="https://www.linkedin.com/in/ryan-mendivil-ab4292275/" />
                </p>
            </div>

            <Section title="Summary">
                <Container>
                    <ul className="list-disc mx-5">
                          <li>Professional experience in software development, devops, full stack and gamedev.</li>
                        <li>Skilled in solving complicated problems and making things work despite constraints and adverse conditions.</li>
                        <li>Knowledgeable in cross platform development with Windows, Mac and Linux.</li>
                        <li>Experienced in leading teams, working across departments and collaborating across time zones.</li>
                        <li>
                            Skills:
                              C#, C++, C, Ruby, Python, Go, Typescript, Node, Rust, Java, Haskell, Lua, ASP.NET, SQL,
                              Unity, Terraform, Elasticsearch, Rails, Redis, React, NextJS, Jenkins, Git, Github, Gitlab, PlasticSCM,
                              Kubernetes, Docker, AWS, GCP, Azure
                        </li>
                    </ul>
                    <ul className="list-disc mx-5">
                    </ul>
                </Container>
            </Section>

            <Section title="Work Experience">
                <Job dates="Jan 2017 - Present" title="Software Engineer" company="Unity Technologies" location="Seattle, WA" logo={unityLogo}>
                    <ul className="list-disc">
                          <li>
                              Designed & implemented Unity Cloud Build artifact management system using Go, Ruby and Node designed to be cloud agnostic.
                              Stood up metrics and alerting systems in Datadog using Terraform and drove adoption in other teams.
                              Team release manager & mentor, onboarded and trained junior devs.
                          </li>
                          <li>
                              Led development & improvements of merge tooling including redesigning Unity scene/prefab merging.
                              Tool optimization yielding 5-50x performance increases for processing large scene files.
                              Fixed bugs and added features for client teams including Blizzard.
                              Built realtime change diffing system hooking into Unity&apos;s serialization system and binary scene files.
                          </li>
                          <li>
                              Worked on editor integration of source control including PlasticSCM, Git and Collab.
                              Worked on the core team of PlasticSCM, implementing features and fixing bugs.
                              Researched and tested migration of our Elasticsearch cluster.
                              Worked with supporting Git repositories on distributed filesystems.
                              Worked on virtual file systems and file system monitoring for both Git and PlasticSCM.
                          </li>
                          <li>
                              Created custom Unity specific YAML parser in C for saving/loading scenes and prefabs,
                              yielding a 5x read and 76x write performance increase over previous systems
                          </li>
                      </ul>
                </Job>

                <Job dates="June 2016 - Dec 2016" title="Software Engineer Intern" company="Unity Technologies" location="Seattle, WA" logo={unityLogo}>
                    <ul className="list-disc">
                        <li>
                              Worked on features and bug fixes for editor source control integration.
                              Created patches for Git LFS supporting additional hashing functions and custom pointer files.
                        </li>
                    </ul>
                </Job>

                <Job dates="Aug 2011 - Jun 2014" title="Analyst Programmer IV" company="State of Alaska" location="Juneau, AK" logo={soaLogo}>
                    <ul className="list-disc">
                        <li>
                              Devops Team lead at State of Alaska HSS, including setting up & administering Gitlab in-house version control servers (and submitting bug PRs to them);
                              spearheaded org-wide adoption and migration to Git;
                              ran automated test & deploy CI/CD pipelines with Jenkins;
                              set up configuration data stores;
                              PII & HIPAA data encryption/security/regulatory compliance;
                              documenting SOPs
                        </li>
                        <li>
                            Development Team lead for development of state health resources directory webapp using ASP.NET & MSSQL including live migration from legacy app with zero downtime
                        </li>
                        <li>
                            Developed & administered State HSS dept sharepoint infrastructure serving 4k government employees & contractors
                        </li>
                        <li>
                              Developed C# application for central dept finance database, replacing legacy AccessDB and reducing financial report processing time from days to seconds
                        </li>
                        <li>
                              Administered hodgepodge of development projects & environments using C#, ColdFusion, Python, Ruby and NodeJS on Windows/Linux
                        </li>
                        <li>
                              On-call tech for state legislature
                        </li>
                    </ul>
                </Job>

                <Job dates="Jan 2008 - Aug 2009" title="Student Intern II" company="State of Alaska" location="Juneau, AK" logo={soaLogo}>
                      <ul className="list-disc">
                          <li>
                              Full stack design & development of grant/contract management webapp (frontend & backend) for Alaska State Government using ASP.NET & MSSQL.
                              Designed & built custom bug tracking tools in C#
                          </li>
                      </ul>
                </Job>
            </Section>

            <Section title="Education">
                <Job dates="2009 - 2011, 2014 - 2016" title="Mathematics Major" company="University of Washington" location="Seattle, WA" logo={uwLogo}>
                    Earned Deans List in Fall 2014, Winter 2015 and Winter 2016, left early to pursue full time work.
                </Job>
            </Section>
            <Section title="Recent Projects">
                <Job dates="" title="VR Visuals" company="Furry Weekend Atlanta" location="Atlanta, GA" logo={fwaLogo}>
                    I was brought on staff to provide visuals and run the video wall for the main stage dances at FWA (a 10k+ person event). 
                    As a part of that I designed and implement a rig to allow a full body dancer in VRChat to be part of the visuals.
                    It was received very well by attendees and we&apos;re working to bring it to more events.
                    <br/>
                    <br/>
                    <ul>
                        <li><a href="https://twitter.com/vintagecoyote/status/1657562573527556105">Video 1: https://twitter.com/vintagecoyote/status/1657562573527556105</a></li>
                        <li><a href="https://twitter.com/MrAnimater/status/1657634152198356992">Video 2: https://twitter.com/MrAnimater/status/1657634152198356992</a></li>
                        <li><a href="https://twitter.com/nullreff/status/1657967899162599425">How it works: https://twitter.com/nullreff/status/1657967899162599425</a></li>
                    </ul>
                </Job>
                <Job dates="" title="Portable VR Rig" company="Personal Project" location="Seattle, WA" logo={alexIcon}>
                    I developed a carry on sized VR rig that comes with a Valve Index, full body tracking, face tracking, charging and a built in PC.
                    It&apos;s been tried and tested on trips and events for both work and play.
                    Most recently I used it for the VRChat dancer on the video wall at FWA.
                    <br/>
                    <br/>
                    <a href="https://old.nullreff.net/projects/portable-index/">More information at https://old.nullreff.net/projects/portable-index/</a>
                </Job>
                <Job dates="" title="Furality Gateway" company="Furry Weekend Atlanta" location="Atlanta, GA" logo={furalityLogo}>
                    I was part of the team that helped assemble and run the Furality Gateway at FWA. 
                    My role was mostly helping with the audio/visual side of things and troubleshooting technical issues.
                    Outside of FWA, I work on the Club AV team for Furality.
                    <br/>
                    <br/>
                    <ul>
                        <li><a href="https://twitter.com/nullreff/status/1657408498404151296">Furality Club: https://twitter.com/nullreff/status/1657408498404151296</a></li>
                    </ul>
                </Job>
                <Job dates="" title="VR Portal" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                    Sora Gryphon and I lead the team that brought a VRChat portal to Anthro Northwest in Seattle.
                    It featured a custom world themed around the convention and was popular with attendees.
                    We&apos;re currently working to expand it for future events.
                    <br/>
                    <br/>

                    <ul>
                        <li><a href="https://twitter.com/nullreff/status/1611510319284908032">The Portal: https://twitter.com/nullreff/status/1611510319284908032</a></li>
                        <li><a href="https://twitter.com/nullreff/status/1611993645393248256">Team Selfie: https://twitter.com/nullreff/status/1611993645393248256</a></li>
                    </ul>
                </Job>
                <Job dates="" title="VR Stargazing" company="Personal Project" location="Eastern WA" logo={alexIcon}>
                    After hearing from VRChat friends that they&apos;d never been star gazing before,
                    I designed and built a cellular streaming rig that allowed for them to experience it with us.
                    We found a location with low light pollution and set up a camera to stream a view of the sky over VRCDN into the VR world.
                    I also set up my Valve Index with full body tracking so I could join them in VR.
                    Working on plans to do it again with an even better setup.
                    <br/>
                    <br/>

                    <ul>
                        <li><a href="https://twitter.com/nullreff/status/1566677289404080128">Setup Thread: https://twitter.com/nullreff/status/1567905614415675394</a></li>
                        <li><a href="https://twitter.com/nullreff/status/1567905614415675394">Stargazing: https://twitter.com/nullreff/status/1611993645393248256</a></li>
                    </ul>
                </Job>
            </Section>
            <div className="text-center m-5">
                <a href="https://nullreff.net/resume">
                    Most recent version at https://nullreff.net/resume
                </a>
            </div>
        </Layout>
    </div>
  )
}
