import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNearMeProps } from '../NearMe.types';

import { display } from './NearMe-display.stories';
import { appearance } from './NearMe-appearance.stories';
import { size } from './NearMe-size.stories';
import { theme } from './NearMe-theme.stories';

export const NearMe = (args: IconsNearMeProps) => (
  <Icon {...args}></Icon>
);

NearMe.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NearMe.argTypes = {
  display,
  appearance,
  size,
  theme,
};
