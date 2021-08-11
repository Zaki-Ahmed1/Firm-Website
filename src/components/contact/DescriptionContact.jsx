import React from 'react';
import { Form } from 'react-bootstrap';
import SectionTitle from '../shared/text/SectionTitle';
import SectionText from '../shared/text/SectionText';

export default function DescriptionContact() {
  return (
    <section>
      <center>
        <SectionTitle>Get in touch with the EnerSea Team</SectionTitle>
      </center>

      <Form>
        Contact Info here
        <label type="text">Name</label>
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
