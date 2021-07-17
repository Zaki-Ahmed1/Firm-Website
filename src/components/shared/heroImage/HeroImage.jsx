import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './HeroImage.module.scss';

export default function HeroImage({ src, children }) {
  return (
    <div className={styles.imageContainer}>
      <Image fluid src={src} />
      <div className={styles.textContainer}>
        <span className={styles.text}>{children}</span>
      </div>
    </div>
  );
}
