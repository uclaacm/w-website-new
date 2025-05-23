import { GetStaticProps } from 'next';
import React from 'react';
import BoardCard from '../components/BoardCard';
import MainLayout from '../components/MainLayout';
//import getOfficerData from '../getOfficers';
//import vars from '../styles/global_variables.module.scss';
import styles from '../styles/Teampage.module.scss';

const SHEET_ID = process.env.TEAM_SPREADSHEET_ID;
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
const RANGE = 'Sheet1!A1:G';

interface Officer {
  position: string;
  name: string;
  pronouns: string;
  email: string;
  github: string;
  imageURL: string;
}
interface Props {
  officers: Officer[];
}
export default function teamPage({ officers }: Props) {
  const officerCards: React.ReactNode[] = [];
  officers.forEach((officer, index) => {
    officerCards.push(
      <div className={styles.card} key={index}>
        <BoardCard
          position={officer.position ?? ''}
          name={officer.name ?? ''}
          pronouns={officer.pronouns ?? ''}
          email={officer.email ?? ''}
          github={officer.github ?? ''}
          imageURL={officer.imageURL ?? ''}
        />
      </div>,
    );
  });
  return (
    <MainLayout>
      <div className={styles.main}>
        <h1 className={styles.title}>Team</h1>
        <div>
          <h2 className={styles.subtitle}>Board</h2>
          <p className={styles.description}>
            Our directors, school leads, and curriculum leads. Feel free to
            reach out to any of our board for more information about what we do!
          </p>
          <div className={styles.boardgrid}>
            {/* 2 per row */}
            {officerCards}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

const getDriveDirectLink = (driveUrl: string): string => {
  const match = driveUrl.match(
    /(?:drive\.google\.com\/.*\/d\/|id=)([a-zA-Z0-9_-]+)/,
  );
  return match
    ? `https://drive.google.com/uc?id=${match[1]}`
    : '/images/default.jpg';
};

const fetchOfficerData = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.values || data.values.length < 2) return [];

  // Extract headers from the first row
  const headers = data.values[0];
  const rows = data.values.slice(1); // Skip header row

  return rows.map((row: string) => {
    const officer: Record<string, string> = {};
    headers.forEach((header: string, index: number) => {
      officer[header.toLowerCase()] = row[index] || ''; // Default to empty string if missing
    });

    return {
      position: officer.position,
      name: officer.name,
      pronouns: officer.pronouns,
      email: officer.email,
      github: officer.github,
      imageURL: getDriveDirectLink(officer.imageurl),
    };
  });
};

export const getStaticProps: GetStaticProps = async () => {
  const officers = await fetchOfficerData();

  return {
    props: { officers },
    revalidate: 3600, // Regenerate every hour
  };
};
