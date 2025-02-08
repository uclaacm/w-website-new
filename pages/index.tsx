import { GetStaticProps } from 'next';
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
            <div className={styles.heading}>
              <h1 className={styles.title}>
                ACM&nbsp;
                <span className={styles['committee-name']}>
                  {vars.committee}
                </span>
              </h1>
              <h2 className={styles.lead}>{committee.subtitle}</h2>
            </div>
            <img src="../public/w_hd.svg" />
            <a
              className={styles['cta-btn']}
              href="https://acm.cs.ucla.edu/internship"
            >
              Join Us
            </a>
            <div className={styles.title}>What is {committee.committee}?</div>
            <p className={styles.description}>{committee.description}</p>
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
  };

  return {
    props: {
      committee: committee,
    },
    revalidate: 3600,
  };
};