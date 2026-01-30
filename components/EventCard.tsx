import Image from 'next/image';
import React from 'react';
import styles from '../styles/EventCard.module.scss';

interface CardInterface {
  header: string;
  body: string;
  time?: string;
  date?: string;
  location?: string;
  img?: string;
}

function EventCard({ header, body, time, location, img }: CardInterface) {
  // Only show image if it's not a default or empty value
  const hasImage = !!img && !img.includes('default');

  return (
    <div className={styles.container}>
      {/* Main content area: header + scrollable body (image + text) */}
      <div className={styles.content}>
        <div className={styles.header}>{header}</div>

        <div className={hasImage ? styles.body : `${styles.body} ${styles['no-image']}`}>
          {hasImage ? (
            <>
              <div className={styles['event-image-wrapper']}>
                <Image src={img as string} width={600} height={400} className={styles['event-image']} alt={header} />
              </div>
              <div className={styles['body-text']}>{body}</div>
            </>
          ) : (
            <div className={`${styles['body-text']} ${styles['full-width']}`}>{body}</div>
          )}
        </div>
      </div>

      {/* Bottom meta area: date/time/location always visible */}
      <div className={styles.meta}>
        <div className={styles['meta-left']}>
          {time && <div className={styles.time}><Image src="/icons8-calendar-24.png" width={16} height={16} alt="calendar" /> <span>{time}</span></div>}
        </div>
        <div className={styles['meta-right']}>{location && <div className={styles.location}>{location}</div>}</div>
      </div>
    </div>
  );
}

export default EventCard;
