/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import SectionTitle from '../shared/text/SectionTitle';
import SectionText from '../shared/text/SectionText';

export default function DescriptionContact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <center className="mb-5">
        <SectionTitle>Get in touch with the EnerSea Team</SectionTitle>
      </center>

      <Form className="mb-5" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Phone" />
          </Form.Group>
        </Row>

        <Button variant="blue" type="submit">
          Submit
        </Button>
      </Form>

      <SectionText className="mt-3">
        EnerSea delivers the complete ”gas supply to energy market” solution for clients with
        stranded gas resources or remote energy markets. To achieve this, EnerSea provides project
        development and execution services to integrate its proprietary VOTRANS™ CNG system with
        onshore/offshore gas supply and delivery terminals and power plants where required.
      </SectionText>
      <SectionText>
        There are over 100 trillion cubic feet of stranded gas resources and curtailed production
        globally, which currently provide no value to their asset owners. In addition, there is a
        worldwide demand for power projects using natural gas instead of liquid fuels to ensure
        long-term, low-cost fuel supplies, while reducing carbon emissions by more than 50%.
        Deployment of the industry leading VOTRANS™ CNG system enables monetization of these gas
        resources and stable fuel supply for power projects, where LNG or pipelines are not viable
        options due to economic, geopolitical or environmental issues.
      </SectionText>
      <SectionText>
        EnerSea’s marine gas transportation services are offered on a long-term tariff basis similar
        to third-party pipeline transportation agreements. This ensures clients are not burdened
        with the upfront capital expenditures related to the dedicated CNG ships or terminals.
      </SectionText>
    </section>
  );
}
