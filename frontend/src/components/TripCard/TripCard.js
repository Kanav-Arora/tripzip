import React from 'react';

import calendarIcon from '../../images/icons/calendarIcon.svg';
import durationIcon from '../../images/icons/durationIcon.svg';
import locationIcon from '../../images/icons/locationIcon.svg';
import styles from './TripCard.module.scss';

function TripCard({ trips }) {
  return (
    <div className={styles.cardContainer}>
      {trips.map(({ location, date, total_days, thumbnail }, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.thumbnail}>
            <img src={thumbnail} alt={location} className={styles.locationImg} />
          </div>
          <div className={styles.tripDetails}>
            <div className={styles.locationHeader}>
              <img src={locationIcon} alt='location icon' className={styles.icons} />
              <span>{location}</span>
            </div>
            <div className={styles.tripInfo}>
              <div className={styles.days_section}>
                <img src={calendarIcon} alt='calendar icon' className={styles.icons} />
                <span>Date: {date}</span>
              </div>
              <div className={styles.days_section}>
                <img src={durationIcon} alt='calendar icon' className={styles.icons} />
                <span>Total Days: {total_days}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default TripCard;