import React, { useState } from 'react';
import { NavDropdown as BSNavDropdown } from 'react-bootstrap';

export default function NavDropdown({ children, ...props }) {
  const [show, setShow] = useState(false);
  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <BSNavDropdown
      show={show}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </BSNavDropdown>
  );
}
