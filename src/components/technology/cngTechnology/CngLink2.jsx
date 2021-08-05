import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HeroImage from '../../shared/heroImage/HeroImage';
import Navbar from '../../shared/navbar/Navbar';
import CngLink2Description from './CngLink2Description';
import Links from './Links';
import Map from './Map';

export default function CngLink2() {
  return (
    <>
      <Navbar />
      <HeroImage src="https://static.wixstatic.com/media/056a2c_1471c0f7a1874873a7a92d57020947df~mv2_d_3840_2160_s_2.png/v1/crop/x_0,y_618,w_3819,h_1038/fill/w_2560,h_696,al_c,q_90,usm_0.66_1.00_0.01/RCM%201X%20CNG%20EnerSea%20SEABED_0006.webp">
        CNG TECHNOLOGY
      </HeroImage>
      <Container>
        <Row className="pt-5">
          <Col sm={12} md={8} className="pr-lg-5">
            <CngLink2Description />
          </Col>
          <Col sm={12} md={4} className="mt-5 mt-md-0">
            <Links />
            <Map className="mt-5" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
