import React from 'react';
import SectionTitle from '../../shared/text/SectionTitle';
import SectionText from '../../shared/text/SectionText';

export default function SolutionsLink1Description() {
  return (
    <section>
      <SectionTitle>Developing Stranded Gas Reserves</SectionTitle>
      <SectionText className="mt-3">
        Smaller gas reservoirs which are not close to existing infrastructure are frequently not
        developed because their low volumes and/or distance to power plants or other gas consumers
        make them economically unviable. EnerSea’s marine CNG solution can deliver natural gas to
        these markets located within 3,000 kilometers of a gas supply and offers the following
        advantages:
        <br />
        <br />
        <ul>
          <li>
            <b>Low-Cost Transportation</b> - Producers can transport gas volumes using EnerSea’s CNG
            system that would be uneconomic by subsea pipeline and too small for liquefied natural
            projects.
          </li>
          <li>
            <b>Scalable Transportation System</b> - EnerSea’s CNG system consists of a fleet of
            ships or barges that provide continuous gas delivery to a market. The fleet can be
            easily scaled up by adding additional ships or barges, so as the supply for natural gas
            grows the transportation infrastructure can easily expand in tandem.
          </li>
          <li>
            <b>Redeployable Infrastructure</b> – Because the bulk of the capital invested in an
            EnerSea CNG project is in floating assets, the system is easily redeployable and its
            capital cost can be amortized over multiple projects.
          </li>
          <li>
            <b>Offshore Loading</b> – – EnerSea can load its ships offshore, receiving either
            processed gas or direct well-stream flow. More information can be found on our Extended
            Well Testing and Early Production Systems page.
          </li>
        </ul>
      </SectionText>
    </section>
  );
}
