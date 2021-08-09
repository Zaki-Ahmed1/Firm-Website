import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './HeroImageNews.module.scss';

export default function HeroImageNews({ src, children }) {
  return (
    <div className={styles.imageContainer}>
      <Image fluid src={src} />
      <div className={styles.textContainer}>
        <span className={styles.text}>{children}</span>
      </div>
    </div>
  );
}
