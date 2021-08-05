import React from 'react';
import SectionTitle from '../../shared/text/SectionTitle';
import SectionText from '../../shared/text/SectionText';

export default function CngLink6Description() {
  return (
    <section>
      <SectionTitle>Combining Reliability and Efficiency</SectionTitle>
      <SectionText className="mt-3">
        <SectionText>
          EnerSea’s transport system is designed for the highest level of reliability based on
          project-specific parameters and client objectives. EnerSea performs studies to investigate
          operational “regularity” for the production and delivery of gas from the client’s gas
          supply source (eg. production platform) to the market. “Regularity” combines consideration
          of reliability and efficiency. Sophisticated simulation software is used to perform these
          detailed analyses starting with the construction of simple models representing key
          elements of the systems and processes involved, as well as the external factors affecting
          those operations, such as:
          <br />
          <br />
          <ul>
            <li>Intermittent or continuous production operations</li>
            <li>Weather conditions: wind, fog and storms</li>
            <li>Met-ocean conditions: wave, current, ice</li>
            <li>Shipping reliability</li>
            <li>Loading and delivery terminal availabilities</li>
            <li>Intermittent or continuous deliveries</li>
            <li>
              Port transit issues: 24 hour operations; Pilot & assist tug requirements; Shipping
              lanes; Port traffic
            </li>
          </ul>
          The use of an event domain simulation program allows the generation of a great many
          perspectives on a complex operation. It allows EnerSea and its clients to understand the
          key drivers of the overall operation and economic value trade-offs for some of the key
          design features and operating strategies.
        </SectionText>
      </SectionText>
    </section>
  );
}
