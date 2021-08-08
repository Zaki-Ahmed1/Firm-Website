import React from 'react';
import SectionTitle from '../../shared/text/SectionTitle';
import ColoredLink from '../../shared/text/ColoredLink';

export default function Links({ ...props }) {
  return (
    <section {...props}>
      <SectionTitle>Cost Effective Technology</SectionTitle>
      <hr />
      <ColoredLink to="/cng-technology-1">
        Meeting Your Customized Natural Gas Supply and Delivery Needs
      </ColoredLink>
      <hr />
      <ColoredLink to="/cng-technology-2">Gas Containment System</ColoredLink>
      <hr />
      <ColoredLink to="/cng-technology-3">CNG Technology Alternatives</ColoredLink>
      <hr />
      <ColoredLink to="/cng-technology-4">Gas Handling System</ColoredLink>
      <hr />
      <ColoredLink to="/cng-technology-5">
        CNG Technology - Patented, Tested, and Approved
      </ColoredLink>
      <hr />
      <ColoredLink to="/cng-technology-6">
        CNG Technology - Combining Reliability and Effeciency
      </ColoredLink>
      <hr />
      <ColoredLink to="/cng-technology-7">CNG Technology - Safety First</ColoredLink>
      <hr />
    </section>
  );
}
