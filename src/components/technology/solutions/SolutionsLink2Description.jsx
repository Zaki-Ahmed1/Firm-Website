import React from 'react';
import SectionTitle from '../../shared/text/SectionTitle';
import SectionText from '../../shared/text/SectionText';
import HeroImage from '../../shared/heroImage/HeroImage';

export default function SolutionsLink2Description() {
  return (
    <section>
      <SectionTitle>Liquid Fuel Replacement</SectionTitle>
      <SectionText className="mt-3">
        Many parts of the world do not have access to traditional natural gas supply networks. These
        include coastal communities, which are remote and disconnected from any gas supply
        infrastructure, and island communities. These “disconnected” markets are often not big
        enough to support large, capital-intensive nuclear or coal-fired power plants, or liquefied
        natural gas (LNG) import facilities. For many of these markets, the only viable solution is
        to use liquid hydrocarbon (e.g. diesel, naptha, fuel oil, etc.) as fuel. Years ago when oil
        was relatively cheap and environmental issues were less of a concern than they are today,
        these solutions made sense.
        <br />
        <br />
        However, during the past decade there has been a rapid increase in the real cost of oil and
        oil-based fuels. Communities dependent on oil-based electricity have seen a tremendous
        increase in the cost to produce electricity, and are actively seeking more economic
        remedies.
        <br />
        <br />
        Fortunately, natural gas is much less expensive than oil on an energy basis.
        <br />
        <br />
        And CNG marine transport can provide a valuable solution to these power generators, by
        connecting them to regional gas suppliers who are not reachable via pipeline.
        <br />
        <br />
        EnerSea offers a range of natural gas delivery solutions, from small capacity barge-based
        systems to large ship-based carriers, to meet the demands of power generators seeking to
        replace liquid fuels with clean-burning natural gas. To assist with the security of supply
        for the generators, as well as to help manage operational load factor fluctuations, EnerSea
        can also provide on-site VOLANDS™ natural gas storage systems.
        <br />
        <br />
        <HeroImage src="./SolutionsLink1ref.png" />
      </SectionText>
    </section>
  );
}
