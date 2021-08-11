import React from 'react';
import SectionTitle from '../../shared/text/SectionTitle';
import ColoredLink from '../../shared/text/ColoredLink';

export default function SolutionsLinks({ ...props }) {
  return (
    <section {...props}>
      <SectionTitle>Applications of CNG Solutions</SectionTitle>
      <hr />
      <ColoredLink to="/solutions-1">Developing Stranded Gas Reserves</ColoredLink>
      <hr />
      <ColoredLink to="/solutions-2">Liquid Fuel Replacement</ColoredLink>
      <hr />
      <ColoredLink to="/solutions-3">Associated Gas</ColoredLink>
      <hr />
      <ColoredLink to="/solutions-4">
        Extended Well Testing and Early Production Systems
      </ColoredLink>
      <hr />
      <ColoredLink to="/solutions-5">Natural Gas Storage Solutions - VOLANDSTM</ColoredLink>
      <hr />
    </section>
  );
}
