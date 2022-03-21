import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMicProps } from '../Mic.types';

import { display } from './Mic-display.stories';
import { appearance } from './Mic-appearance.stories';
import { size } from './Mic-size.stories';
import { theme } from './Mic-theme.stories';

export const Mic = (args: IconsMicProps) => (
  <Icon {...args}></Icon>
);

Mic.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Mic.argTypes = {
  display,
  appearance,
  size,
  theme,
};
