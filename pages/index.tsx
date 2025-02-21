import "bootstrap/dist/css/bootstrap.min.css";
import { GetStaticProps } from 'next';
import Image from 'next/image';
import illustration from '../public/Illustration2.png';
import group from '../public/groupphoto.png';
import MainLayout from '../components/MainLayout';
//import getCommitteeInfo from '../scripts/landing-page-generator.mjs';
import vars from '../styles/global_variables.module.scss';
import styles from '../styles/LandingPage.module.scss';

interface Committee {
  committee: string;
  name: string;
  subtitle: string;
  description: string;
  logoLink: string;
  dcLink: string;
  igLink: string;
  email: string;
  favicon: string;
  backgroundImg: string;
  tttt: string;
}

interface Props {
  committee: Committee;
  idName: string;
}

export default function Home({ committee }: Props): JSX.Element {
  return (
    <MainLayout>
      <div>
        <div className={styles.masthead} style={{ backgroundImage: `url(${committee.backgroundImg})` }}>
          <div className={styles['masthead-text']}>
            <div >
            <div className={styles.heading} style={{margin: "1%"}}>
              <h1 className={styles.title} style={{margin: "5%"}}>
                ACM&nbsp;
                <span className={styles['committee-name']}>
                  {vars.committee}
                </span>
              </h1>
              <h2 className={styles.lead}>{committee.subtitle}</h2>
            </div>
            <a style={{padding: "2%", marginLeft: "2%"}}
              className={styles['cta-btn']}
              href="https://acm.cs.ucla.edu/internship"
            >
              Join Us
            </a>
            </div>
            <div style={{ position: "absolute", width: "50vw", height: "50vh", 
              left: "80%", top: "0%"}}>
            <Image src={illustration} alt="Illustration"/>
            </div>
            <br/>

            <div>
            <div style={{ marginTop: "20%", width: "50vw"}} 
            className={styles.title}>What is {committee.committee}?</div>
            <p className={styles.description}>{committee.description}</p>
            <div style={{ position: "absolute", width: "27vw", left: "100%", top: "90vh"}}>
            <Image style={{objectFit: "cover", }} src={group} alt="Illustration"/>
            </div>
            </div>
              <br/>

              {/* Event 1 */}
            <div style={{width: "100vw",  marginBottom: "5%"}}>
            <div style={{ marginTop: "10%", marginBottom: "5%"}} 
            className={styles.title}>Flagship Events and Programs</div>
            <span style={{display: "flex", alignItems: "center", gap: "70px", width: "100vw"}}>
            <h2 style={{display: "inline-block"}} className={styles.subtitle}>Break the Binary </h2>
            <p style={{display: "inline-block" }} className={styles.lead}>Fall Quarter</p>
            </span>
            <div style={{width: "70%"}}>
            <p className={styles.description}>🌟🚀🔥 Break the Binary is 
              a beginner-friendly coding event hosted by ACM W and ICPC 🌟🔗🌈👩‍💻👨‍💻.
               Dive into problem-solving, enjoy free boba and pizza, and win epic prizes! 
               💫 Whether you're new to computer science or just looking to get more involved, 
               this event is for you. Come for the fun, stay for the learning and community! 💻💥🙌</p>
            </div>
            </div>

              {/* Event 2 */}
              <div style={{width: "100vw", marginBottom: "5%"}}>
            <span style={{display: "flex", alignItems: "center", gap: "70px", width: "100vw"}}>
            <h2 style={{display: "inline-block"}} className={styles.subtitle}>Tech FellowShip </h2>
            <p style={{display: "inline-block" }} className={styles.lead}>Winter Quarter</p>
            </span>
            <div style={{width: "70%"}}>
            <p className={styles.description}>🌟💻 Curious about product management and software engineering? <br/>
            Apply for our tech fellowship to dive into the full product life cycle, gain industry insights, 
            and pitch your project on Demo Day, all while connecting with a supportive community. 
            🌈 Whether you're a total beginner or looking to level up, this fellowship is open to all 
            experience levels! 🙌✨</p>
            </div>
            </div>

            {/* Event 3 */}
            <div style={{width: "100vw", marginBottom: "5%"}}>
            <span style={{display: "flex", alignItems: "center", gap: "70px", width: "100vw"}}>
            <h2 style={{display: "inline-block"}} className={styles.subtitle}>Mentorship</h2>
            <p style={{display: "inline-block" }} className={styles.lead}>Year Long</p>
            </span>
            <div style={{width: "70%"}}>
            <p className={styles.description}>Our mentorship program teams you up with an upperclassman, 
              grad student, or alumni. 🤝 🩵 We host events and plan fun outings where you can 
              connect with your mentor, get advice, and ask questions. 💡⭐️ We've been running this program 
              for years, helping lots of students, and we're excited to support you through it this school year! 📚⚡️</p>
            </div>
            </div>

            {/* Event 4 */}
            <div style={{width: "100vw", marginBottom: "5%"}}>
            <span style={{display: "flex", alignItems: "center", gap: "70px", width: "100vw"}}>
            <h2 style={{display: "inline-block"}} className={styles.subtitle}>Other Events</h2>
            <p style={{display: "inline-block" }} className={styles.lead}>Year Long</p>
            </span>
            <div style={{width: "70%"}}>
            <p className={styles.description}>💼✨ We host career workshops, industry panels, 
              and socials 🍕every quarter! We’ve previously paired up with Amazon, Google, and 
              Breakthrough Tech AI to host superb events. Stay tuned for more! 👀💕</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const committee = await getCommitteeInfo(vars.committee);
  const committee = {
    committee: 'ACM-W',
    name: 'Association for Computing Machinery',
    subtitle: 'Empowering students for diversity and inclusion in tech',
    description: 'Our mission is to support, celebrate, and advocate for anyone and everyone interested in computer science. We are dedicated to fostering an inclusive community by providing programs and resoirces to UCLA students. Whether you\'re a seasoned coder or just starting out, ACM-W is here to support you and your journey!',
    logoLink: '/assets/acm-logo.png',
    dcLink: 'https://discord.gg/acm-ucla',
    igLink: 'https://www.instagram.com/acm_ucla/',
    email: 'acm@cs.ucla.edu',
    favicon: '/assets/favicon.ico',
    backgroundImg: '/assets/acm-background.jpg',
    tttt: 'hhhhhhhhhhhhhh',
  };

  return {
    props: {
      committee: committee,
    },
    revalidate: 3600,
  };
};