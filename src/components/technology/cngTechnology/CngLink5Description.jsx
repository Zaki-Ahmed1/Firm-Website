import React from 'react';
import SectionTitle from '../../shared/text/SectionTitle';
import SectionText from '../../shared/text/SectionText';
import HeroImage from '../../shared/heroImage/HeroImage';

export default function CngLink5Description() {
  return (
    <section>
      <SectionTitle>Patented, Tested, and Approved Technology</SectionTitle>
      <SectionText className="mt-3">
        <HeroImage src="./cngtechlink5ref.png" />
        <SectionText>
          <p>
            The American Bureau of Shipping (ABS) has stated that,{' '}
            <b>“EnerSea systems are ready to move directly into project construction.”</b>
          </p>
          <br />
          This process began in 2001 and reached its first milestone in 2003, when ABS granted
          “Class Approval in Principle” (AIP) for EnerSea’s ship design after an extensive program
          was completed to design the ship in cooperation with “K”Line (ship operator) and Hyundai
          Heavy Industries (ship builder). AIP is the first critical step in the process towards
          Class Approval and demonstrates that the VOTRANS vessels (both ships and barges), as
          designed, conform to ABS Class Rules and International Gas Code, as applicable. Subsequent
          to being granted AIP, and following the extensive Prototype Test Program (see below) and
          other engineering and design work, EnerSea was advised that “ABS will approve either the
          CNG ship or CNG barge with EnerSea’s VOTRANS containment system”. [Note that final class
          certification is only awarded after a vessel has been built and passed its sea and gas
          trials].
          <br />
          <br />
          ABS issued their “Guide for Vessels Intended to Carry Compressed Natural Gases in Bulk” in
          April 2005. In January 2003, Det Norske Veritas (DNV) published its Special Service Rules
          providing guidance for “Compressed Natural Gas Carriers”. Bureau Veritas also published
          its CNG guide, “Classificatin of Compressed Natural Gas Carriers”, in April 2007.
          <br />
          <br />
          EnerSea has worked with ABS and other leading Classification societies to ensure the
          development of its VOTRANS designs (ships and barges) complies with the rules and guides
          issued by these societies.
          <br />
          <br />
          EnerSea holds several patents for its unique design in the United States and other
          countries worldwide covering key aspects of the gas containment and gas handling systems.
          <br />
          <br />
          <b>Prototype Test Program</b>
          As a further step to establish VOTRANS’ readiness for projects, EnerSea successfully
          completed a 2-1/2 year, multi-million dollar Prototype Test Program. This two-part
          initiative confirmed that:
          <br />
          <br />
          <ol>
            <li>
              <b>
                the VOTRANS containment system design and materials were robust and qualified for
                transport service; and
              </b>
            </li>
            <li>
              <b>
                the functionality and system operability of the VOTRANS system behaved as designed
                in both normal and upset operating conditions.
              </b>
            </li>
          </ol>
          <br />
          <br />
          These testing programs involved EnerSea’s development team and participating clients and
          were witnessed and approved by ABS.
          <br />
          <br />
          <p>
            <b>Full-scale Materials Tests: </b> Full-scale (diameter) cylinders were constructed and
            subjected to cyclical pressure and bending fatigue stresses in accordance with ABS
            requirements at temperatures from -30o C to -50oC and operating pressures. All cylinders
            survived the pressurizations through the ABS-required three operating lifetimes without
            developing critical size fatigue cracks. EnerSea successfully completed all material
            testing to ABS requirements.
          </p>
          <p>
            <b>Gas Handling Validation Tests: </b> EnerSea worked with the Gas Technology Institute
            (GTI) to test and validate the performance and operational characteristics of the
            VOTRANS Gas Handling System, evaluate static and dynamic aspects of the system,
            investigate fluid mechanical phenomenon, and to support the development of a framework
            for control logic and algorithms that can be applied to full-scale versions of the
            system. A scaled design of the VOTRANS system was constructed for testing.
          </p>
          <p>
            Stable baseline operation of the system was performed to verify equipment operation
            under the target conditions, and real-time high-speed data were gathered and analyzed to
            evaluate temperature effects (e.g. gas compression or expansion, liquid heat build-up,
            formation of hydrates or ice) or other unexpected phenomenon. Flow rates, weights,
            temperatures and pressures at various points in the system were also documented. A
            second series of tests were performed to validate the performance and operation of the
            system against a matrix of abnormal operating conditions to assess the robustness of the
            system. These tests were performed successfully.{' '}
            <b>
              EnerSea successfully completed all gas handling validation tests, which were approved
              by ABS.
            </b>
          </p>
        </SectionText>
      </SectionText>
    </section>
  );
}
