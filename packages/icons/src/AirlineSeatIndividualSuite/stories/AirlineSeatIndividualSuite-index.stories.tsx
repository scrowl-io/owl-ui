import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAirlineSeatIndividualSuiteProps } from '../AirlineSeatIndividualSuite.types';

import { display } from './AirlineSeatIndividualSuite-display.stories';
import { appearance } from './AirlineSeatIndividualSuite-appearance.stories';
import { size } from './AirlineSeatIndividualSuite-size.stories';
import { theme } from './AirlineSeatIndividualSuite-theme.stories';

export const AirlineSeatIndividualSuite = (args: IconsAirlineSeatIndividualSuiteProps) => (
  <Icon {...args}></Icon>
);

AirlineSeatIndividualSuite.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AirlineSeatIndividualSuite.argTypes = {
  display,
  appearance,
  size,
  theme,
};
