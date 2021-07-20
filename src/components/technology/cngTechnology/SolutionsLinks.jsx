import React from 'react';
import SectionTitle from '../../shared/text/SectionTitle';
import ColoredLink from '../../shared/text/ColoredLink';

export default function SolutionsLinks({ ...props }) {
  return (
    <section {...props}>
      <SectionTitle>Developing Stranded Gas Reserves</SectionTitle>
      <hr />
      <ColoredLink>Liquid Fuel Replacement</ColoredLink>
      <hr />
      <ColoredLink>Associated Gas</ColoredLink>
      <hr />
      <ColoredLink>Extended Well Testing and Early Production Systems</ColoredLink>
      <hr />
      <ColoredLink>Natural Gas Storage Solutions - VOLANDSTM</ColoredLink>
      <hr />
    </section>
  );
}
