import React from 'react';
import SectionTitle from '../../shared/text/SectionTitle';
import SectionText from '../../shared/text/SectionText';
import HeroImage from '../../shared/heroImage/HeroImage';

export default function CngLink7Description() {
  return (
    <section>
      <SectionTitle>Safety First</SectionTitle>
      <SectionText className="mt-3">
        <SectionText>
          EnerSea’s first and foremost priority will always be to take a proactive approach to
          safety in all designs and operations. Numerous safety features and systems have been
          included in the VOTRANS™ design and operating procedures, many of which are extensions
          from existing gas facility and vessel design principles and practices. In the evolution of
          our current VOTRANS designs, EnerSea completed a variety of safety and risk studies that
          have provided insight for the design of EnerSea’s CNG vessels which will meet class
          society requirements including:
          <br />
          <br />
          <ul>
            <li>VOTRANS CNG Containment Structural Integrity Assessments</li>
            <li>Vessel HAZID Studies</li>
            <li>Vessel HAZID Register – updated regularly</li>
            <li>Cold Jet Studies for Containment System</li>
            <li>Comparative Risk Assessment between EnerSea’s CNG system and LNG operations</li>
            <li>Vessel Inspectability (In-service Inspection Plan)</li>
            <li>Fire and Explosion</li>
            <li>Escape, Evacuation and Rescue</li>
            <li>Gas Dispersion Analysis</li>
          </ul>
          Additionally, ABS required that EnerSea’s system be benchmarked against gas shipping
          alternatives to ensure an equivalent or better level of safety compared to the historic
          safe operating performance of LNG. ABS Consulting (ABSC) performed a series of risk
          studies aimed at providing a holistic approach to risk assessment for EnerSea’s CNG
          vessel. The Comparative Risk Assessment compared the risks associated with complete
          transportation systems in the form of Liquefied Natural Gas (LNG) and EnerSea’s CNG marine
          transport. The total system can be categorized into seven analogous phases summarized as:
          <br />
          <br />
          <HeroImage src="./cngtechlink7ref.png" />
          <br />
          <br />
          The fundamental conclusion drawn from the study is that risks associated with the two
          options are comparable, although distributed differently between the phases of the
          operation, and that the two gas transport technologies of CNG and LNG have the same order
          of risk overall.
        </SectionText>
      </SectionText>
    </section>
  );
}
