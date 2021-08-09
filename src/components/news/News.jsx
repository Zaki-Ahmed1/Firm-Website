import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Navbar from '../shared/navbar/Navbar';
import HeroImageNews from '../shared/heroImage/HeroImageNews';
import MapNews from './MapNews';
import NewsLinks from './NewsLinks';
import NewsDescription from './NewsDescription';

export default function News() {
  return (
    <>
      <Navbar />
      <HeroImageNews src="https://static.wixstatic.com/media/056a2c_eb045b460b1c4b1dbb93fd80d5299e99~mv2_d_3840_2160_s_2.png/v1/crop/x_0,y_111,w_3840,h_1115/fill/w_2560,h_682,al_c,q_90,usm_0.66_1.00_0.01/RCM%201X%20CNG%20EnerSea%20OCEAN_0003.webp">
        NEWS
      </HeroImageNews>
      <Container>
        <Row className="pt-5">
          <Col sm={12} md={8} className="pr-lg-5">
            <NewsDescription />
          </Col>
          <Col sm={12} md={4} className="mt-5 mt-md-0">
            <NewsLinks />
            <MapNews className="mt-5" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
