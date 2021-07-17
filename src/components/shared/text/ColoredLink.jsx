import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ColoredLink.module.scss';

export default function ColoredLink({ to, children }) {
  return (
    <Link to={to}>
      <div className={styles.link}>{children}</div>
    </Link>
  );
}
