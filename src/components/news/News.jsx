import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Navbar from '../shared/navbar/Navbar';
import HeroImageNews from '../shared/heroImage/HeroImageNews';
import NewsLinks from './NewsLinks';
import NewsDescription from './NewsDescription';

export default function News() {
  return (
    <>
      <Navbar />
      <HeroImageNews src="./news.png" />
      <Container>
        <Row className="pt-5">
          <Col sm={12} md={8} className="pr-lg-5">
            <NewsDescription />
          </Col>
          <Col sm={12} md={4} className="mt-5 mt-md-0">
            <NewsLinks />
          </Col>
        </Row>
      </Container>
    </>
  );
}
