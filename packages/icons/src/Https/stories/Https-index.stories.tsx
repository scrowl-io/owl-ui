import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHttpsProps } from '../Https.types';

import { display } from './Https-display.stories';
import { appearance } from './Https-appearance.stories';
import { size } from './Https-size.stories';
import { theme } from './Https-theme.stories';

export const Https = (args: IconsHttpsProps) => (
  <Icon {...args}></Icon>
);

Https.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Https.argTypes = {
  display,
  appearance,
  size,
  theme,
};
