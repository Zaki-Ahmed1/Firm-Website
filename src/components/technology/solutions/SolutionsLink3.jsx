import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HeroImage from '../../shared/heroImage/HeroImage';
import Navbar from '../../shared/navbar/Navbar';
import Map from '../cngTechnology/Map';
import SolutionsLinks from './SolutionsLinks';
import SolutionsLink3Description from './SolutionsLink3Description';

export default function SolutionsLink3() {
  return (
    <>
      <Navbar />
      <HeroImage src="https://static.wixstatic.com/media/056a2c_770b2111554c44d48e44ca13b27b9b1e~mv2_d_3840_2160_s_2.png/v1/crop/x_0,y_160,w_3819,h_1038/fill/w_2560,h_696,al_c,q_90,usm_0.66_1.00_0.01/RCM%201X%20CNG%20EnerSea%20OCEAN_0005.webp">
        SOLUTIONS
      </HeroImage>
      <Container>
        <Row className="pt-5">
          <Col sm={12} md={8} className="pr-lg-5">
            <SolutionsLink3Description />
          </Col>
          <Col sm={12} md={4} className="mt-5 mt-md-0">
            <SolutionsLinks />
            <Map className="mt-5" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
