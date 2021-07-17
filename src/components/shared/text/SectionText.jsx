import React from 'react';
import classNames from 'classnames';

export default function SectionText({ children, className, ...props }) {
  const sectionTextClassName = classNames(className, 'pt-3');

  return (
    <p className={sectionTextClassName} {...props}>
      {children}
    </p>
  );
}
