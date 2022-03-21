import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocationDisabledProps } from '../LocationDisabled.types';

import { display } from './LocationDisabled-display.stories';
import { appearance } from './LocationDisabled-appearance.stories';
import { size } from './LocationDisabled-size.stories';
import { theme } from './LocationDisabled-theme.stories';

export const LocationDisabled = (args: IconsLocationDisabledProps) => (
  <Icon {...args}></Icon>
);

LocationDisabled.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocationDisabled.argTypes = {
  display,
  appearance,
  size,
  theme,
};
