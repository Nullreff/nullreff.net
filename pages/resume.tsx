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
import Container from '../components/resume/container';

export default function Resume() {
  return (
    <div className="container mx-auto">
        <Layout>
            <Head>
                <title>Ryan Mendivil - Resume</title>
            </Head>

            <div className="text-center">
                <h1>Ryan Mendivil</h1>
                <p>
                    <IconLink title="Email" icon={faEnvelope} link="mailto:resume@nullreff.net" />・
                    <IconLink title="Github" icon={faGithub} link="https://github.com/nullreff/" />・
                    <IconLink title="Linkedin" icon={faEnvelope} link="https://www.linkedin.com/in/ryan-mendivil-ab4292275/" />
                </p>
            </div>

            <Section title="Summary">
                <Container>
                    <p>
                        Professional experience in programming, systems development and administration.
                        Comprehensive knowledge of both low level and high level technologies and frameworks.
                        Well-versed in developing custom software systems.
                        Outstanding analytical and problem solving skills.
                    </p>
                    <p>
                        C#, Java, C, JavaScript, Ruby, Haskell, Lua, PHP, ASP.NET, SQL
                        Sinatra, ASP.NET MVC, Rails, Spring, OpenResty, jQuery, React
                        Vim, Git, Bash, IntelliJ, Unix tools, PostgreSQL, SQL Server, Visual Studio, PowerShell
                        Debian 6/7/8, Ubuntu Desktop/LTS, CentOS/RHEL 6, Windows Desktop/Server
                    </p>
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
                              Primary languages: C#, C++ and C
                          </li>
                          <li>
                              Worked on editor integration of source control including PlasticSCM, Git and Collab.
                              Worked on the core team of PlasticSCM, implementing features and fixing bugs.
                              Researched and tested migration of our Elasticsearch cluster.
                              Worked with supporting Git repositories on distributed filesystems (GlusterFS).
                              Worked on virtual file systems and file system monitoring for both Git and PlasticSCM.
                          </li>
                          <li>
                              Created custom Unity specific YAML parser in C for saving/loading scenes and prefabs,
                              yielding a 5x read and 76x write performance increase over previous systems
                          </li>
                      </ul>
                </Job>

                <Job dates="June 2016 - Dec 2016" title="Software Engineer Intern" company="Unity Technologies" location="Seattle, WA" logo={unityLogo}>
                    Worked on features and bug fixes for editor source control integration.
                    Created patches for Git LFS supporting additional hashing functions and custom pointer files.
                </Job>

                <Job dates="Aug 2011 - Jun 2014" title="Analyst Programmer IV" company="State of Alaska" location="Juneau, AK" logo={soaLogo}>
                    Devops Team lead at State of Alaska HSS, including setting up & administering Gitlab in-house version control servers (and submitting bug PRs to them);
                    spearheaded org-wide adoption and migration to Git;
                    ran automated test & deploy CI/CD pipelines with Jenkins;
                    set up configuration data stores;
                    PII & HIPAA data encryption/security/regulatory compliance;
                    documenting SOPs
                    <br/>
                    Development Team lead for development of state health resources directory webapp using ASP.NET & MSSQL including live migration from legacy app with zero downtime
                    <br/>
                    Developed & administered State HSS dept sharepoint infrastructure serving 4k government employees & contractors
                    <br/>
                    Developed C# application for central dept finance database, replacing legacy AccessDB and reducing financial report processing time from days to seconds
                    <br/>
                    Administered hodgepodge of development projects & environments using C#, ColdFusion, Python, Ruby and NodeJS on Windows/Linux
                    <br/>
                    On-call tech for state legislature
                </Job>

                <Job dates="Jan 2008 - Aug 2009" title="Student Intern II" company="State of Alaska" location="Juneau, AK" logo={soaLogo}>
                    Full stack design & development of grant/contract management webapp (frontend & backend) for Alaska State Government using ASP.NET & MSSQL.
                    Designed & built custom bug tracking tools in C#
                </Job>
            </Section>

            <Section title="Education">
                <Job dates="2009 - 2011, 2014 - 2016" title="Mathematics Major" company="University of Washington" location="Seattle, WA" logo={uwLogo}>
                    Earned Deans List in Fall 2014, Winter 2015 and Winter 2016, left early to pursue full time work.
                </Job>
            </Section>
            {/*
            <Section title="Projects">
                <Job dates="" title="VR Visuals" company="Furry Weekend Atlanta" location="Atlanta, GA" logo={fwaLogo}>
                    FWA VJ
                </Job>
                <Job dates="" title="Portable VR Rig" company="Personal Project" location="Seattle, WA" logo={anwLogo}>
                    Portable VR rig
                </Job>
                <Job dates="" title="Furality Gateway" company="Furry Weekend Atlanta" location="Atlanta, GA" logo={furalityLogo}>
                    FWA Furality Gateway
                </Job>
                <Job dates="" title="VR Portal" company="Anthro Northwest" location="Seattle, WA" logo={anwLogo}>
                    ANW Portal
                </Job>
                <Job dates="" title="VR Stargazing" company="Personal Project" location="Eastern WA" logo={anwLogo}>
                    VR Stargazing
                </Job>
            </Section>
            */}
        </Layout>
    </div>
  )
}
