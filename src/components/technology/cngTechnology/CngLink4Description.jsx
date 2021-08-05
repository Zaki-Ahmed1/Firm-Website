import React from 'react';
import SectionTitle from '../../shared/text/SectionTitle';
import SectionText from '../../shared/text/SectionText';

export default function CngLink4Description() {
  return (
    <section>
      <SectionTitle>CNG TECHNOLOGY Gas Handling System</SectionTitle>
      <SectionText className="mt-3">
        EnerSea’s proprietary gas handling system used for loading and unloading gas maximizes the
        efficiency of gas cargo storage. The loading system, which compresses and cools the gas to
        storage conditions, increases the gas to steel weight ratio as explained in Gas Containment
        system. To unload the gas from the gas containment system, a fluid (ethylene glycol/water
        mixture – similar to antifreeze) is pumped into the containment system, displacing the gas
        at constant pressure and temperature. This operation is a closed loop process and is
        performed sequentially from tank group to tank group, thus minimizing the amount of ethylene
        glycol-water inventory required to a level of approximately 8-10% of the total containment
        system capacity.
        <br />
        <br />
        <p>
          Control of the temperature behavior within the containment system allows gas to be
          offloaded at very high rates while still utilizing carbon steel materials in its
          construction. Gas is heated prior to its transfer to the customer to ensure that the
          specified delivery conditions are achieved. This provides a highly efficient offloading
          method to minimize the residual gas left in containment, while preventing potentially
          detrimental temperature dynamics from occurring within the cargo containment system.
        </p>
        <br />
        Additionally, the positive displacement aspect of the VOTRANS™ cargo delivery system
        efficiently overcomes the problems of downstream back pressure, which limits the ability of
        pressure depletion methods (i.e. “blowdown”) commonly used in alternative CNG designs.
        Expensive scavenging compression is not required, and yet the VOTRANS system can still
        deliver up to 98% of the stored cargo to the market, compared to only 85-90% for the less
        efficient blowdown systems.
        <p>In summary, the advantages of this process are:</p>
        <ul>
          <li>
            Lower residual gas volumes (2-5%) for VOTRANS compared to about 10-15% for conventional
            high pressure blowdown systems
          </li>
          <li>Pressure and temperature dynamics are managed during offloading</li>
          <li>Minimal impact by downstream receiving system back-pressure</li>
          <li>
            Evacuates all NGLs, therefore can accommodate a wide range of gas composition, including
            rich and associated gas
          </li>
          <li>
            Low cost liquid pumps required for offloading compared to scavenging gas compression
            required for blowdown method
          </li>
        </ul>
        <br />
        <p>
          The complete gas handling system, including automation and control systems, have been
          designed, built and tested during EnerSea’s Prototype Test Program, the results of which
          were approved by ABS.
        </p>
      </SectionText>
    </section>
  );
}
