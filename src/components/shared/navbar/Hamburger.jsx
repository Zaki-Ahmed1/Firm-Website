import React, { useState } from 'react';
import classNames from 'classnames';

export default function Hamburger() {
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false);
  const toggleHamburger = () => setHamburgerIsActive(!hamburgerIsActive);
  const hamburgerClassName = classNames('hamburger', 'hamburger--spin', {
    'is-active': hamburgerIsActive,
  });

  return (
    <span>
      <button className={hamburgerClassName} type="button" onClick={toggleHamburger}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    </span>
  );
}
