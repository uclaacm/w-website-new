import Image from 'next/image';
import React from 'react';
import styles from '../styles/EventCard.module.scss';

interface CardInterface {
  header: string;
  body: string;
  time: string;
  date: string;
  img: string;
}
function EventCard({ header, body, time, img }: CardInterface) {
  // Only show image if it's not a default or empty value
  const hasImage = img && !img.includes('default');
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.header}>{header}</div>
        <div
          className={
            hasImage ? styles.body : `${styles.body} ${styles['no-image']}`
          }
        >
          {hasImage ? (
            <>
              <div className={styles['event-image-wrapper']}>
                <Image
                  src={img}
                  width={300}
                  height={300}
                  className={styles['event-image']}
                  alt={header}
                />
              </div>
              <div className={styles['body-text']}>{body}</div>
            </>
          ) : (
            <div className={styles['body-text'] + ' ' + styles['full-width']}>
              {body}
            </div>
          )}
        </div>
        <div className={styles.time}>
          <Image
            src="/icons8-calendar-24.png"
            width={20}
            height={20}
            alt="calendar icon"
          />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
