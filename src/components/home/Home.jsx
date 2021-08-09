import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Navbar from '../shared/navbar/Navbar';
import HeroImage from '../shared/heroImage/HeroImage';
import SectionTitle from '../shared/text/SectionTitle';
import SectionText from '../shared/text/SectionText';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <HeroImage src="https://static.wixstatic.com/media/056a2c_09d425519a2848fca7e86da79b30908e~mv2_d_3840_2160_s_2.png/v1/fill/w_1920,h_773,al_c,q_90,usm_0.66_1.00_0.01/056a2c_09d425519a2848fca7e86da79b30908e~mv2_d_3840_2160_s_2.webp">
          The World’s Most Advanced Marine CNG Technology
        </HeroImage>
        <Row>
          <Col>
            <br />
            <SectionTitle>ABS & DNV GL Approved Ship Design</SectionTitle>
            <SectionText>
              EnerSea’s marine CNG vessels have approvals from the world’s two leading maritime
              classification societies, American Bureau of Shipping (ABS) and Det Norske Veritas
              (DNV-GL).
            </SectionText>
          </Col>
          <Col>
            <br />
            <HeroImage src="https://static.wixstatic.com/media/056a2c_7d361d8dc1954d8c81753267716cc743~mv2_d_3000_1685_s_2.jpg/v1/fill/w_1122,h_630,al_c,q_85,usm_0.66_1.00_0.01/Oil-Platform_edited.webp">
              <SectionText>Significant cost reduction versus</SectionText>
              <SectionText>transport alternatives</SectionText>
            </HeroImage>
          </Col>
        </Row>
        <center>
          <br />
        </center>
        <br />
        <HeroImage src="./HomePic.png" />
        <br />
        <HeroImage src="./HomePic2.png" />
        <br />
        <br />
      </Container>
    </div>
  );
}
