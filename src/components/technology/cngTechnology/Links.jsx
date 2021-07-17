import React from 'react';
import SectionTitle from '../../shared/text/SectionTitle';
import ColoredLink from '../../shared/text/ColoredLink';

export default function Links({ ...props }) {
  return (
    <section {...props}>
      <SectionTitle>Cost Effective Technology</SectionTitle>
      <hr />
      <ColoredLink>Meeting Your Customized Natural Gas Supply and Delivery Needs</ColoredLink>
      <hr />
      <ColoredLink>Gas Containment System</ColoredLink>
      <hr />
      <ColoredLink>CNG Technology Alternatives</ColoredLink>
      <hr />
      <ColoredLink>Gas Handling System</ColoredLink>
      <hr />
      <ColoredLink>CNG Technology - Patented, Tested, and Approved</ColoredLink>
      <hr />
      <ColoredLink>CNG Technology - Combining Reliability and Effeciency</ColoredLink>
      <hr />
      <ColoredLink>CNG Technology - Safety First</ColoredLink>
      <hr />
    </section>
  );
}
