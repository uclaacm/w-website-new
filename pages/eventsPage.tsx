import { format } from 'date-fns';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import MainLayout from '../components/MainLayout';
//import getAllEvents from '../scripts/event-generator-sheets.mjs';
import styles from '../styles/Events.module.scss';
import vars from '../styles/global_variables.module.scss';

interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  start: string;
  end: string;
  committee: string;
  event_type: string;
  registration_link: string;
  max_capacity: number;
  banner: string;
}

// interface EventClass {
//   className?: string;
// }

// const getEventClassByEvent = (event: Event): EventClass => {
//   if (!event) {
//     return {};
//   }
//   let modifierStr = '';
//   if (event.committee) {
//     modifierStr = `rbc-override-${event.committee}`;
//   }
//   return ({
//     className: `rbc-override-event ${modifierStr}`,
//   });
// };

interface Props {
  events: Event[];
  committee: string;
}

export default function Events({ events }: Props): JSX.Element {
  // const [activeEvent, setActiveEvent] = useState<Event | null>(null);
  const [indexedEvents] = useState<Event[]>( // wasn't using setindexedEvents so was getting linting errors </3
    events.map((event, index) => ({ ...event, id: index })),
  );
  //replace committee below
  const committee = vars.committee.toLowerCase();

  const filteredEvents = indexedEvents.filter(
    (event) => event.committee === committee,
  );

  const uniqueEvents = Array.from(
    // filters out identical events, ignoring "id" field
    new Map(
      filteredEvents.map((event) => [
        JSON.stringify({ ...event, id: undefined }),
        event,
      ]),
    ).values(),
  );

  if (committee === 'board') {
    uniqueEvents.shift();
  }

  return (
    <MainLayout>
      <div className={styles.main}>
        <h1 className={styles.title}>Events</h1>
        {/* <p className={styles.description}>
          Event descriptions Event descriptionsEvent descriptionsEvent
          descriptionsEvent descriptionsEvent descriptions Event
          descriptionsEvent descriptionsEvent descriptions
        </p> */}
        <div>
          <h2 className={styles.subtitle}>Upcoming Events</h2>
          {uniqueEvents.map((event, index) => {
            const start = format(new Date(event.start), 'h:mma');
            const end = format(new Date(event.end), 'h:mma');
            const startDate = format(new Date(event.start), 'E MMM d');
            const endDate = format(new Date(event.end), 'E MMM d');
            let time = start + ' - ' + end;
            {
              startDate === endDate
                ? (time = startDate + ' ' + time)
                : (time =
                    startDate + ' ' + start + ' - ' + endDate + ' ' + end);
            }

            return (
              <div key={index} className={styles.card}>
                <EventCard
                  header={event.title}
                  body={event.description}
                  time={time}
                  img={event.banner}
                />
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  //const events = await getAllEvents();
  const events = [
    {
      id: 0,
      title: 'Sample Event 1',
      description: 'This is a sample description for Event 1.',
      location: 'Location 1',
      start: '2025-02-10T10:00:00',
      end: '2025-02-10T12:00:00',
      committee: 'sample',
      event_type: 'Workshop',
      registration_link: 'https://example.com/register',
      max_capacity: 50,
      banner: '/images/sample-banner.jpg',
    },
    {
      id: 1,
      title: 'Sample Event 2',
      description: 'This is a sample description for Event 2.',
      location: 'Location 2',
      start: '2025-02-15T14:00:00',
      end: '2025-02-15T16:00:00',
      committee: 'sample',
      event_type: 'Seminar',
      registration_link: 'https://example.com/register',
      max_capacity: 30,
      banner: '/images/sample-banner2.jpg',
    },
  ];
  // const processedEvents = events.map((event) => (
  //  {...event, description: <>{event.description.replace(/\n/g, '<br/>')}</>}));
  // console.log(processedEvents);
  for (const event of events) {
    event.banner = await event.banner;
  }

  return {
    props: {
      events: events,
    },
    revalidate: 3600,
  };
};
