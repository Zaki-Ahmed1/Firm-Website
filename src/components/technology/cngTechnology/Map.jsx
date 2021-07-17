import React from 'react';
import { Image } from 'react-bootstrap';
import SectionTitle from '../../shared/text/SectionTitle';

export default function Map({ ...props }) {
  return (
    <section {...props}>
      <SectionTitle>Regional Opportunities</SectionTitle>
      <Image
        className="rounded mt-3"
        fluid
        src="https://static.wixstatic.com/media/056a2c_31cfe614ae2b430ebd7636b4a478271a~mv2.jpg/v1/fill/w_600,h_320,al_c,q_80,usm_0.66_1.00_0.01/img_map.webp"
      />
    </section>
  );
}
