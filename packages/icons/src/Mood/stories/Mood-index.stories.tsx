import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMoodProps } from '../Mood.types';

import { display } from './Mood-display.stories';
import { appearance } from './Mood-appearance.stories';
import { size } from './Mood-size.stories';
import { theme } from './Mood-theme.stories';

export const Mood = (args: IconsMoodProps) => (
  <Icon {...args}></Icon>
);

Mood.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Mood.argTypes = {
  display,
  appearance,
  size,
  theme,
};
