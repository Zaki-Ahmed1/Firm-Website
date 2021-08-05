import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../shared/text/SectionTitle';
import ColoredLink from '../../shared/text/ColoredLink';

export default function SolutionsLinks({ ...props }) {
  return (
    <section {...props}>
      <SectionTitle>Applications of CNG Solutions</SectionTitle>
      <hr />
      <ColoredLink as={Link} to="./SolutionsLink1">
        Developing Stranded Gas Reserves
      </ColoredLink>
      <hr />
      <ColoredLink as={Link} to="./SolutionsLink2">
        Liquid Fuel Replacement
      </ColoredLink>
      <hr />
      <ColoredLink as={Link} to="./SolutionsLink3">
        Associated Gas
      </ColoredLink>
      <hr />
      <ColoredLink as={Link} to="./SolutionsLink4">
        Extended Well Testing and Early Production Systems
      </ColoredLink>
      <hr />
      <ColoredLink as={Link} to="./SolutionsLink5">
        Natural Gas Storage Solutions - VOLANDSTM
      </ColoredLink>
      <hr />
    </section>
  );
}
