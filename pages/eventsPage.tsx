import { GetStaticProps } from 'next';
import React from 'react';
import EventCard from '../components/EventCard';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Events.module.scss';

const SHEET_ID = process.env.EVENTS_SPREADSHEET_ID;
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
const RANGE_WINTER = "Winter '25!A1:E";
const RANGE_SPRING = "Spring '25!A1:E";

interface Event {
  name: string;
  description: string;
  start: string;
  date: string;
  image: string;
}

interface Props {
  events: Event[];
  /* committee: string; */
}

export default function Events({ events }: Props) {
  const pastEventCards: React.ReactNode[] = [];
  const eventCards: React.ReactNode[] = [];

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for accurate comparison

  events.forEach((event, index) => {
    const eventDate = new Date(event.date); // Parses MM/DD/YYYY
    const isPast = eventDate < today;
    const card = (
      <div
        className={`${styles.card} ${isPast ? styles['past-card'] : ''}`}
        key={index}
      >
        <EventCard
          header={event.name ?? 'Unnamed Event'}
          body={event.description ?? 'No description available'}
          time={event.start ?? 'Week'}
          date={event.date ?? ''}
          img={event.image ?? '/default-image.jpg'}
        />
      </div>
    );

    if (eventDate < today) {
      pastEventCards.push(card);
    } else {
      eventCards.push(card);
    }
  });
  pastEventCards.reverse();
  return (
    <MainLayout>
      <div className={styles.main}>
        <h1 className={styles.title} style={{ marginLeft: 0 }}>
          Events
        </h1>
        <div className={styles['calendar-and-events-wrapper']}>
          <div className={styles['calendar-container']}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=c_1586b29997e5897de4c58780fa92c7b64d38067216977d88050dc30da14629e1%40group.calendar.google.com&ctz=America%2FLos_Angeles"
              style={{ border: 0 }}
              height="70vh"
              frameBorder="0"
              scrolling="no"
            />
          </div>

          {eventCards.length > 0 && (
            <div className={styles['events-section']}>
              <h2
                className={`${styles.subtitle} ${styles['upcoming-events-title']}`}
              >
                Upcoming Events
              </h2>
              <p
                className={`${styles.description} ${styles['centered-description']}`}
              >
                Check out our upcoming events below! Don&apos;t miss out!
              </p>
              <div className={styles.boardgrid}>{eventCards}</div>
            </div>
          )}
        </div>

        <div className={styles['past-events-container']}>
          <h2 className={styles.subtitle}>Past Events</h2>
          <p className={styles['past-events-description']}>
            Check out our past events!
          </p>
          <div className={styles['past-events-grid']}>{pastEventCards}</div>
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

const fetchEventData = async () => {
  const ranges = [RANGE_WINTER, RANGE_SPRING];
  const allEvents = [];

  for (const range of ranges) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data.values || data.values.length < 2) continue;

    const headers = data.values[0];
    const rows = data.values.slice(1);

    const events = rows.map((row: string[]) => {
      const event: Record<string, string> = {};

      headers.forEach((header: string, index: number) => {
        event[header.toLowerCase()] = row[index] || '';
      });

      return {
        name: event.header,
        description: event.description,
        start: event['start (date and time)'],
        date: event.date,
        image: getDriveDirectLink(event['image/banner']),
      };
    });

    allEvents.push(...events);
  }

  return allEvents;
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await fetchEventData();

  return {
    props: { events },
    revalidate: 3600, // Regenerate every hour
  };
};
