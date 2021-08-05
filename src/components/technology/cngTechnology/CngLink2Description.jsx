import React from 'react';
import SectionTitle from '../../shared/text/SectionTitle';
import SectionText from '../../shared/text/SectionText';

export default function CngLink3Description() {
  return (
    <section>
      <SectionTitle>Gas Containment System</SectionTitle>
      <SectionText className="mt-3">
        <SectionText>
          EnerSea achieves its cost-effective design by optimizing the pressure and temperature
          conditions of gas stored in its VOTRANS™ system, which offers the following key
          advantages:
          <br />
          <br />
          <ul>
            <li>50%+ lower operating pressure than other CNG concepts</li>
            <ul>
              <li>Lower compression horsepower and fuel requirements</li>
            </ul>
          </ul>
          <ul>
            <li>60%+ greater gas storage efficiency than other CNG concepts</li>
            <ul>
              <li>Less pressure and lower temperature means more gas stored per ton of steel</li>
            </ul>
          </ul>
          <ul>
            <li>
              Use of carbon steel pressure vessels allows conventional pressure vessel fabrication
            </li>
            <ul>
              <li>No coiling or fiberglass winding</li>
              <li>No single-sourced fabrication</li>
            </ul>
          </ul>
          <ul>
            <li>Less containment steel also reduces total ship weight and related fuel use</li>
          </ul>
          <br />
          The practical application of Boyle’s Law for real (non-ideal) gases provides the basis for
          EnerSea’s optimization process. The law states that PV = NrTZ; where P is the gas
          pressure, V is the containment volume, N is the mass (moles) of gas, T is the temperature
          of the gas and R is the gas constant. The empirical “compressibility factor” (or “Z
          factor”) of non-ideal gases is sensitive to both temperature and pressure.
          <br />
          <br />
          As indicated in the above diagram, gases stored at lower temperatures also have lower Z
          factors. For a given pressure, lower temperatures (with associated lower Z factors) allow
          more gas to be packed into the storage container. Also, for a given gas temperature there
          is a distinct Z factor minima and associated pressure on the curve that represents the
          maximum compressibility effect for the gas.
          <br />
          <br />
          Designing the VOTRANS system to operate at or near the minimum compressibility factor for
          a specific gas means that a denser “volume-optimized” gaseous state can be achieved, with
          a much more commercially attractive “specific capacity” (ratio of the volume of gas at
          ambient conditions to the volume of gas at storage conditions) at a relatively low
          pressure. The gas will be compressed and cooled prior to entering the gas containment
          system. As an example, EnerSea can store a typical natural gas onboard at approximately
          125 bar (1815 psi) and -30oC (-22oF).
          <br />
          <br />
          <b>
            Bottom-line, the overall cost to load and store CNG in EnerSea’s VOTRANS system is
            significantly lower than alternative CNG designs.
          </b>
          <br />
          <br />
          More details regarding comparisons with other technologies are available.
          <br />
          <br />
        </SectionText>
      </SectionText>
    </section>
  );
}
