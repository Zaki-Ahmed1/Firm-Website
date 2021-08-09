import React from 'react';
import SectionTitle from '../shared/text/SectionTitle';
import ColoredLink from '../shared/text/ColoredLink';

export default function NewsLinks({ ...props }) {
  return (
    <section {...props}>
      <SectionTitle>Benefits of CNG Solutions</SectionTitle>
      <hr />
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
