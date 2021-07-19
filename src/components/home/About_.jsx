import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HeroImage from '../../shared/heroImage/HeroImage';
import Navbar from '../../shared/navbar/Navbar';
import Description from './Description';
import Links from './Links';
import Map from './Map';

export default function About() {
  return (
    <>
      <Navbar />
      <HeroImage src="https://static.wixstatic.com/media/056a2c_3975fb8b19b64d96a3e90facb27491de~mv2_d_3840_2160_s_2.png/v1/crop/x_0,y_676,w_3696,h_1007/fill/w_1920,h_523,al_c,q_90,usm_0.66_1.00_0.01/EnerSea%20Ship%20(About%20Us).webp">
        ABOUT US
      </HeroImage>
      <Container>
        <Row className="pt-5">
          <Col sm={12} md={8} className="pr-lg-5">
            <Description />
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
