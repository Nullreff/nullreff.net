import Head from 'next/head'
import Layout from '../components/layout';
import Link from 'next/link';
import styles from '../styles/Resume.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGit,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

const data = {
    name: "Ryan Mendivil",
    links: [
        {
            title: "Email",
            icon: faEnvelope,
            href: "mailto:resume@nullreff.net"
        },
        {
            title: "Github",
            icon: faGithub,
            href: "https://github.com/nullreff/"
        },
        {
            title: "Linkedin",
            icon: faLinkedin,
            href: "https://www.linkedin.com/in/ryan-mendivil-ab4292275/"
        }
    ]
}

export default function Resume() {
  return (
    <div className={styles.resume}>
        <Layout>
            <Head>
                <title>{data.name} - Resume</title>
            </Head>

            <div className={styles.intro}>
                <h1>{data.name}</h1>
                <p>
                    {data.links.map((link, i) => {
                        return (
                            <span>
                                {i !== 0 && "・"}
                                <Link href={link.href}>
                                    <FontAwesomeIcon icon={link.icon} className=""/>
                                    {link.title}
                                </Link>
                            </span>
                        )
                    })}
                </p>
            </div>

            <div className={styles.summary}>
                <h2>Summary of Qualifications</h2> 
                <p>
                    Professional experience in programming, systems development and administration.
                    Comprehensive knowledge of both low level and high level technologies and frameworks.
                    Well-versed in developing custom software systems.
                    Outstanding analytical and problem solving skills. 
                </p>

                <p>
                    Languages: C#, Java, C, JavaScript, Ruby, Haskell, Lua, PHP, ASP.NET, SQL
                    <br/>
                    Code: Sinatra, ASP.NET MVC, Rails, Spring, OpenResty, jQuery, React
                    <br/>
                    Software: Vim, Git, Bash, IntelliJ, Unix tools, PostgreSQL, SQL Server, Visual Studio, PowerShell
                    <br/>
                    Operating Systems: Debian 6/7/8, Ubuntu Desktop/LTS, CentOS/RHEL 6, Windows Desktop/Server
                </p>
            </div>

            <div className={styles.experience}>
                <h2>Work Experience</h2> 

                <div>
                    <div className={styles.dates}>Jan 2017 - Present</div>
                    <div className={styles.jobTitle}>Software Engineer</div>
                    <div className={styles.organization}>Unity Technologies, Seattle, WA</div>

                    Designed & implemented Unity Cloud Build artifact management system using Go, Ruby and Node designed to be cloud agnostic.
                    Stood up metrics and alerting systems in Datadog using Terraform and drove adoption in other teams.
                    Team release manager & mentor, onboarded and trained junior devs.
                    <br/>
                    Led development & improvements of merge tooling including redesigning Unity scene/prefab merging.
                    Tool optimization yielding 5-50x performance increases for processing large scene files.
                    Fixed bugs and added features for client teams including Blizzard.
                    Built realtime change diffing system hooking into Unity's serialization system and binary scene files.
                    Primary languages: C#, C++ and C
                    <br/>
                    Worked on editor integration of source control including PlasticSCM, Git and Collab.
                    Worked on the core team of PlasticSCM, implementing features and fixing bugs.
                    Researched and tested migration of our Elasticsearch cluster.
                    Worked with supporting Git repositories on distributed filesystems (GlusterFS).
                    Worked on virtual file systems and file system monitoring for both Git and PlasticSCM.
                    <br/>
                    Created custom Unity specific YAML parser in C for saving/loading scenes and prefabs,
                    yielding a 5x read and 76x write performance increase over previous systems
                </div>

                <div>
                    <div className={styles.dates}>June 2016 - Dec 2016</div>
                    <div className={styles.jobTitle}>Software Engineer Intern</div>
                    <div className={styles.organization}>Unity Technologies - Seattle, WA</div>

                    Worked on features and bug fixes for editor source control integration.
                    Created patches for Git LFS supporting additional hashing functions and custom pointer files.
                </div>

                <div>
                    <div className={styles.dates}>Aug 2011 - Jun 2014</div>
                    <div className={styles.title}>Analyst Programmer IV</div>
                    <div className={styles.organization}>State of Alaska - Juneau, AK</div>

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
                </div>

                <div>
                    <div className={styles.dates}>Jan 2008 - Aug 2009</div>
                    <div className={styles.jobTitle}>Student Intern II</div>
                    <div className={styles.organization}>State of Alaska - Juneau, AK</div>

                    Full stack design & development of grant/contract management webapp (frontend & backend) for Alaska State Government using ASP.NET & MSSQL.
                    Designed & built custom bug tracking tools in C#
                </div>
            </div>

            <div className={styles.education}>
                <h2>Education</h2>

                <div>
                    <div className={styles.dates}>2009 - 2011, 2014 - 2016</div>
                    <div className={styles.organization}>University of Washington - Seattle, WA</div>

                    Mathematics Major, 3.25 cumulative GPA. Earned Deans List in Fall 2014, Winter 2015 and Winter 2016.
                </div>
            </div>
        </Layout>
    </div>
  )
}
