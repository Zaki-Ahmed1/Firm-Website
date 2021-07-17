import React from 'react';
import classNames from 'classnames';
import styles from './Section.module.scss';

export default function SectionTitle({ children, className, ...props }) {
  const sectionTitleClassName = classNames(className, styles.titleText, 'w-75');

  return (
    <h1 className={sectionTitleClassName} {...props}>
      {children}
    </h1>
  );
}
