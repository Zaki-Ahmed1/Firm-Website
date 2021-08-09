import React from 'react';
import SectionTitle from '../shared/text/SectionTitle';

export default function NewsLinks({ ...props }) {
  return (
    <section {...props}>
      <SectionTitle>Recent News, Press Releases and Reports</SectionTitle>
      <hr />
      <hr />
      <ul>
        <li>Natural Gas Demand Grows Strongly by 40% from 2017 to 2040</li>
      </ul>
      <br />
      <ul>
        <li>IEAs: Gas 2019 - Analysis and Forecast to 2024</li>
      </ul>
      <br />
      <ul>
        <li>IGU Releases 2019 World LNG Report</li>
      </ul>
    </section>
  );
}
