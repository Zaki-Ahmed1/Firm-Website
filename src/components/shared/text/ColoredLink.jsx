/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ColoredLink.module.scss';

export default function ColoredLink({ to, scrollTo, children }) {
  if (to) {
    return (
      <Link to={to}>
        <div className={styles.link}>{children}</div>
      </Link>
    );
  }

  const handleClick = () => {
    document.getElementById(scrollTo).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.scrollLink} onClick={handleClick} role="link">
      {children}
    </div>
  );
}
