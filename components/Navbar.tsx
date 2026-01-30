import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import wlogo from '../public/wlogo.webp';
import styles from '../styles/Navbar.module.scss';

interface CommitteeData {
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

const Navbar = () => {
  const [committeeData, setCommitteeData] = useState<CommitteeData[] | null>(
    null,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/output.json');
        const jsonData = await response.json();
        setCommitteeData(jsonData);
      } catch (error) {
        console.error('error');
      }
    };
    //eslint-disable-next-line
    fetchData();
  }, []);

  const [clicked, setClicked] = useState(false);
  return (
    <div>
      {committeeData && (
        <nav className={styles.navbar}>
          <div className="navbar-brand">
            <Link href="/">
              <a className="force-child-display-block">
                <Image
                  src={wlogo}
                  width={150}
                  height={80}
                  alt="Open Source at ACM Home"
                />
              </a>
            </Link>
          </div>
          <div>
            <ul
              className={`${styles['nav-item-list']} ${clicked ? styles.active : ''}`}
            >
              <li>
                <Link href="/teamPage">
                  <a>Team</a>
                </Link>
              </li>
              <li>
                <Link href="/eventsPage">
                  <a>Events</a>
                </Link>
              </li>
              <li>
                <Link href="https://acm.cs.ucla.edu/internship">
                  <button>Join Us</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles['small-screen']}>
            <button onClick={() => setClicked(!clicked)} aria-label="Toggle menu" style={{ background: 'none', border: 'none', padding: 0 }}>
              {clicked ? (
                // Close (X) icon
                <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12l-4.9 4.89a1 1 0 101.41 1.42L12 13.41l4.89 4.9a1 1 0 001.42-1.42L13.41 12l4.9-4.89a1 1 0 000-1.4z" />
                </svg>
              ) : (
                // Hamburger icon
                <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 6h18a1 1 0 000-2H3a1 1 0 000 2zm18 5H3a1 1 0 000 2h18a1 1 0 000-2zM3 19h18a1 1 0 000-2H3a1 1 0 000 2z" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
