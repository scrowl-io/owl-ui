import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWcProps } from '../Wc.types';

import { display } from './Wc-display.stories';
import { appearance } from './Wc-appearance.stories';
import { size } from './Wc-size.stories';
import { theme } from './Wc-theme.stories';

export const Wc = (args: IconsWcProps) => (
  <Icon {...args}></Icon>
);

Wc.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Wc.argTypes = {
  display,
  appearance,
  size,
  theme,
};
