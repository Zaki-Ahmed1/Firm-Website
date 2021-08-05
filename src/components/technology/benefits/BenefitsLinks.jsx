import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../shared/text/SectionTitle';
import ColoredLink from '../../shared/text/ColoredLink';

export default function BenefitsLinks({ ...props }) {
  return (
    <section {...props}>
      <SectionTitle>Benefits of CNG Solutions</SectionTitle>
      <hr />
      <ColoredLink as={Link} to="BenefitsLinks/Link1">
        CNG - A Proven Technology
      </ColoredLink>
      <hr />
      <ColoredLink>Developing CNG Marine Transport (VOLTRANS)</ColoredLink>
      <hr />
      <ColoredLink>Transport Solutions and Applications</ColoredLink>
      <hr />
      <ColoredLink>Comparing CNG with LNG Supply Chain</ColoredLink>
      <hr />
      <ColoredLink>Project Management Tool and Risk Management</ColoredLink>
      <hr />
      <ColoredLink>Safety and Environmental Benefits</ColoredLink>
      <hr />
    </section>
  );
}
