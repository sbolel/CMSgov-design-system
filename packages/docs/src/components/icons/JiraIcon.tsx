import React from 'react';
import { SvgIcon } from '@cmsgov/design-system';

/**
 * SVG for Jira logo
 */
const JiraIcon = () => {
  return (
    <SvgIcon title="Jira logo" viewBox="0 0 496 512" className="c-jira-icon ds-u-font-size--xl">
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M490 241.7C417.1 169 320.6 71.8 248.5 0 83 164.9 6 241.7 6 241.7c-7.9 7.9-7.9 20.7 0 28.7C138.8 402.7 67.8 331.9 248.5 512c379.4-378 15.7-16.7 241.5-241.7 8-7.9 8-20.7 0-28.6zm-241.5 90l-76-75.7 76-75.7 76 75.7-76 75.7z"
      />
    </SvgIcon>
  );
};

export default JiraIcon;
