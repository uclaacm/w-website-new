import 'bootstrap/dist/css/bootstrap.min.css';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../components/MainLayout';
import slack from '../public/acmwslack 1.png';
import event1 from '../public/event1.png';
import event2 from '../public/event2.png';
import event3 from '../public/event3.png';
import event4 from '../public/event4.png';
import group from '../public/groupphoto.png';
import icon1 from '../public/icon1.png';
import illustration from '../public/Illustration2.png';
import ins from '../public/ins.png';
import linkedin from '../public/LinkedIn_logo_initials 1.png';
import padding1 from '../public/padding1.png';
import padding2 from '../public/padding2.png';
import padding3 from '../public/padding3.png';
import padding4 from '../public/padding4.png';
import padding5 from '../public/padding5.png';
import padding6 from '../public/padding6.png';
import padding7 from '../public/padding7.png';
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
}

interface Props {
  committee: Committee;
  idName: string;
}

export default function Home({ committee }: Props): JSX.Element {
  return (
    <MainLayout>
      <div>
        <div
          className={styles.masthead}
          style={{ backgroundImage: `url(${committee.backgroundImg})` }}
        >
          <div className={styles['masthead-text']}>
            <div
              style={{
                position: 'absolute',
                top: '4vw',
                left: '2vw',
                width: '6vw',
                maxWidth: '120px',
                zIndex: 5,
              }}
            >
              <Image
                src={padding1}
                alt="Decorative Icons"
                width={120}
                height={300}
              />
            </div>

            <div>
              <div className={styles.heading} style={{ margin: '1%' }}>
                <h1 className={styles.title} style={{ margin: '5%' }}>
                  ACM&nbsp;
                  <span className={styles['committee-name']}>
                    {vars.committee}
                  </span>
                </h1>
                <h2 className={styles.lead}>{committee.subtitle}</h2>
              </div>

              <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <a
                  style={{ padding: '2%', marginLeft: '2%' }}
                  className={styles['cta-btn']}
                  href="https://acm.cs.ucla.edu/internship"
                >
                  Join Us
                </a>
                <a
                  href="https://www.instagram.com/uclaacmw?igsh=NTc4MTIwNjQ2YQ=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={ins} alt="Instagram logo" />
                </a>
                <Image src={slack} alt="Slack logo" />
                <Image src={linkedin} alt="Linkedin logo" />
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                width: '50vw',
                height: '50vh',
                left: '80%',
                top: '0%',
              }}
            >
              <Image src={illustration} alt="Illustration" />
            </div>
            <br />

            <div
              style={{
                width: '90vw',
                marginTop: '15%',
                display: 'flex',
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ width: '50vw' }}>
                <div className={styles.title}>
                  What is {committee.committee}?
                </div>
                <p className={styles.description}>{committee.description}</p>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '10vw',
                  right: '5vw',
                  width: '10vw',
                  maxWidth: '10vw',
                  zIndex: 10,
                }}
              >
                <Image
                  src={padding5}
                  alt="Decorative Icons"
                  width={100}
                  height={330}
                />
              </div>

              <div style={{ width: '30vw', marginRight: '10%' }}>
                <Image style={{ objectFit: 'cover' }} src={group} alt="Image" />
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '-7vw',
                  width: '10vw',
                }}
              >
                <Image
                  src={padding2}
                  alt="Decorative Icons"
                  width={320}
                  height={280}
                />
              </div>
            </div>

            {/* Event 1 */}
            <div style={{ width: '100vw', marginBottom: '5%' }}>
              <div
                style={{ marginTop: '5%', marginBottom: '5%' }}
                className={styles.title}
              >
                Flagship Events and Programs
              </div>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '70px',
                  width: '100vw',
                }}
              >
                <h2
                  style={{ display: 'inline-block' }}
                  className={styles.subtitle}
                >
                  Break the Binary{' '}
                </h2>
                <p style={{ display: 'inline-block' }} className={styles.lead}>
                  Fall Quarter
                </p>
              </span>
              <div
                style={{ width: '70%', display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    marginLeft: '-60px', // pushes it into the page margin
                    marginRight: '10px',
                    width: '50px',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={padding3}
                    alt="Decorative Icons"
                    width={35}
                    height={70}
                  />
                </div>
                <Image
                  style={{ objectFit: 'cover', width: '40%', height: 'auto' }}
                  src={event1}
                  alt="event1"
                />
                <p
                  style={{ width: '100%', marginLeft: '5%' }}
                  className={styles.description}
                >
                  🌟🚀🔥 Break the Binary is a beginner-friendly coding event
                  hosted by ACM W and ICPC 🌟🔗🌈👩‍💻👨‍💻. Dive into
                  problem-solving, enjoy free boba and pizza, and win epic
                  prizes! 💫 Whether you`&apos;`re new to computer science or
                  just looking to get more involved, this event is for you. Come
                  for the fun, stay for the learning and community! 💻💥🙌
                </p>

                <div
                  style={{
                    marginLeft: 'auto',
                    marginTop: 'clamp(-400px, -4vw, -200px)',
                    marginRight: '-100px',
                    width: 'clamp(60px, 8vw, 100px)',
                  }}
                >
                  <Image
                    src={padding6}
                    alt="Right padding"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div style={{ width: '100vw', marginBottom: '5%' }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '70px',
                  width: '100vw',
                }}
              >
                <h2
                  style={{ display: 'inline-block' }}
                  className={styles.subtitle}
                >
                  Tech FellowShip{' '}
                </h2>
                <p style={{ display: 'inline-block' }} className={styles.lead}>
                  Winter Quarter
                </p>
              </span>
              <div
                style={{ width: '70%', display: 'flex', alignItems: 'center' }}
              >
                <Image
                  style={{ objectFit: 'cover', width: '40%', height: 'auto' }}
                  src={event2}
                  alt="event2"
                />
                <p
                  style={{ width: '100%', marginLeft: '5%' }}
                  className={styles.description}
                >
                  🌟💻 Curious about product management and software
                  engineering? <br />
                  Apply for our tech fellowship to dive into the full product
                  life cycle, gain industry insights, and pitch your project on
                  Demo Day, all while connecting with a supportive community. 🌈
                  Whether you`&apos;`re a total beginner or looking to level up,
                  this fellowship is open to all experience levels! 🙌✨
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div style={{ width: '100vw', marginBottom: '5%' }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '70px',
                  width: '100vw',
                }}
              >
                <h2
                  style={{ display: 'inline-block' }}
                  className={styles.subtitle}
                >
                  Mentorship
                </h2>
                <p style={{ display: 'inline-block' }} className={styles.lead}>
                  Year Long
                </p>
              </span>
              <div
                style={{ width: '75%', display: 'flex', alignItems: 'center' }}
              >
                <Image
                  style={{ objectFit: 'cover', width: '40%', height: 'auto' }}
                  src={event3}
                  alt="event3"
                />
                <p
                  style={{ width: '100%', marginLeft: '5%' }}
                  className={styles.description}
                >
                  Our mentorship program teams you up with an upperclassman,
                  grad student, or alumni. 🤝 🩵 We host events and plan fun
                  outings where you can connect with your mentor, get advice,
                  and ask questions. 💡⭐️ We`&apos;`ve been running this
                  program for years, helping lots of students, and we`&apos;`re
                  excited to support you through it this school year! 📚⚡️
                </p>
              </div>
            </div>

            {/* Event 4 */}
            <div style={{ width: '100vw', marginBottom: '5%' }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '70px',
                  width: '100vw',
                }}
              >
                <h2
                  style={{ display: 'inline-block' }}
                  className={styles.subtitle}
                >
                  Other Events
                </h2>
                <p style={{ display: 'inline-block' }} className={styles.lead}>
                  Year Long
                </p>
              </span>
              <div
                style={{ width: '70%', display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    marginLeft: '-7vw',
                    marginRight: '2vw',
                    marginTop: '20vw',
                  }}
                >
                  <Image
                    src={padding4}
                    alt="Decorative Icons"
                    width={150}
                    height={220}
                  />
                </div>

                <Image
                  style={{ objectFit: 'cover', width: '40%', height: 'auto' }}
                  src={event4}
                  alt="event4"
                />
                <p
                  style={{ width: '100%', marginLeft: '5%' }}
                  className={styles.description}
                >
                  💼✨ We host career workshops, industry panels, and socials
                  🍕every quarter! We have previously paired up with Amazon,
                  Google, and Breakthrough Tech AI to host superb events. Stay
                  tuned for more! 👀💕
                </p>

                <div
                  style={{
                    marginLeft: 'auto',
                    marginTop: 'clamp(-400px, -4vw, -200px)',
                    marginRight: '-100px',
                    width: 'clamp(120px, 10vw, 250px)',
                  }}
                >
                  <Image
                    src={padding7}
                    alt="Right padding"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '70vw',
              }}
            >
              <Link href="/eventsPage">
                <a className={styles['cta-btn']}>View all events</a>
              </Link>
            </div>
            <br />

            <div
              style={{ width: '100vw', margin: '0 auto', paddingLeft: '5%' }}
            >
              <div
                style={{
                  width: '90vw',
                  marginTop: '5%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ width: '50vw' }}>
                  <div className={styles.title}>Anyone can join!</div>
                  <p className={styles.description}>
                    Apply for our internship or officer positions 💻 <br />
                    Apply for our fellowship program 🌱 <br />
                    Attend our events! 🔄
                  </p>
                </div>
                <div style={{ width: '30vw', marginRight: '10%' }}>
                  <Image
                    style={{ objectFit: 'cover' }}
                    src={icon1}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '70vw',
              }}
            >
              <Link href="/teamPage">
                <a className={styles['cta-btn']}>View Our Team</a>
              </Link>
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
    description:
      "Our mission is to support, celebrate, and advocate for anyone and everyone interested in computer science. We are dedicated to fostering an inclusive community by providing programs and resoirces to UCLA students. Whether you're a seasoned coder or just starting out, ACM-W is here to support you and your journey!",
    logoLink: '/assets/acm-logo.png',
    dcLink: 'https://discord.gg/acm-ucla',
    igLink: 'https://www.instagram.com/acm_ucla/',
    email: 'acm@cs.ucla.edu',
    favicon: '/assets/favicon.ico',
    backgroundImg: '/assets/acm-background.jpg',
  };

  return {
    props: {
      committee: committee,
    },
    revalidate: 3600,
  };
};
