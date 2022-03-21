import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDetailsProps } from '../Details.types';

import { display } from './Details-display.stories';
import { appearance } from './Details-appearance.stories';
import { size } from './Details-size.stories';
import { theme } from './Details-theme.stories';

export const Details = (args: IconsDetailsProps) => (
  <Icon {...args}></Icon>
);

Details.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Details.argTypes = {
  display,
  appearance,
  size,
  theme,
};
