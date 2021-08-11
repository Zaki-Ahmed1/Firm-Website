import React from 'react';
import SectionTitle from '../../shared/text/SectionTitle';
import ColoredLink from '../../shared/text/ColoredLink';

export default function BenefitsLinks({ ...props }) {
  return (
    <section {...props}>
      <SectionTitle>Benefits of CNG Solutions</SectionTitle>
      <hr />
      <ColoredLink scrollTo="proven-technology">CNG - A Proven Technology</ColoredLink>
      <hr />
      <ColoredLink scrollTo="enersea-marine">
        Developing CNG Marine Transport (VOLTRANS)
      </ColoredLink>
      <hr />
      <ColoredLink scrollTo="application">Transport Solutions and Applications</ColoredLink>
      <hr />
      <ColoredLink scrollTo="comparison">Comparing CNG with LNG Supply Chain</ColoredLink>
      <hr />
      <ColoredLink scrollTo="unique">Project Management Tool and Risk Management</ColoredLink>
      <hr />
      <ColoredLink scrollTo="safety">Safety and Environmental Benefits</ColoredLink>
      <hr />
    </section>
  );
}
