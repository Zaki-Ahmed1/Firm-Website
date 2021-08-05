import React from 'react';
import SectionTitle from '../../shared/text/SectionTitle';
import SectionText from '../../shared/text/SectionText';
import HeroImage from '../../shared/heroImage/HeroImage';

export default function CngLink1Description() {
  return (
    <section>
      <SectionTitle>Meeting Your Customized Natural Gas Supply and Delivery Needs</SectionTitle>
      <SectionText className="mt-3">
        EnerSea offers its marine CNG delivery service to clients based on their specific needs. The
        VOTRANS™ marine gas delivery service can be provided through fit-for-purpose ships or barges
        which are tailored to meet the project’s needs. EnerSea’s technology provides the ability to
        move as much as 1 Bcf or as little as 20 MMscf per vessel, at significantly lower costs than
        other gas export alternatives.The selection of ship type is dependent on several factors
        with the most significant factors being:
        <br />
        <br />
        <ul>
          <li>Rate and volume of gas to be transported</li>
          <li>Distance to market</li>
          <li>Sea conditions</li>
          <li>Offshore/onshore terminals</li>
        </ul>
      </SectionText>
      <SectionText>
        <b>Additional Info</b>
        <br />
        <br />
        <p>Vessel design drivers</p>
        <ul>
          <li>Delivery rate</li>
          <li>Distance from supply to market</li>
          <li>Offshore/onshore terminals</li>
          <li>Sea conditions</li>
        </ul>
        <HeroImage src="./cngtechlink1ref.png" />
      </SectionText>
      <SectionText>
        CNG offers clients great flexibility to meet gas supply and delivery objectives. For
        example, loading and offloading terminal facilities can be located at traditional port
        jetties at or near shore. If gas supply is offshore, buoys can be utilized. Gas compression
        and cooling can be located either at the client’s production facilities or onboard EnerSea’s
        vessels or, if onshore, at port. Offloading facilities can be located either at port or on
        EnerSea’s vessels, if offloading offshore. EnerSea can also provide VOLANDS (Volume
        Optimized Land Storage), an innovative, above-ground compressed natural gas land-based
        storage system. VOLANDS can be integrated into a marine gas transport project, or can be
        provided as a stand-alone storage solution for clients in geologically constrained areas
        worldwide.
      </SectionText>
      <SectionText>
        <HeroImage src="./cngtechnavpic1.png" />
        <br />
        <HeroImage src="./cngtechnavpic2.png" />
      </SectionText>
    </section>
  );
}
