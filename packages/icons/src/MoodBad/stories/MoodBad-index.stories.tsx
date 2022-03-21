import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMoodBadProps } from '../MoodBad.types';

import { display } from './MoodBad-display.stories';
import { appearance } from './MoodBad-appearance.stories';
import { size } from './MoodBad-size.stories';
import { theme } from './MoodBad-theme.stories';

export const MoodBad = (args: IconsMoodBadProps) => (
  <Icon {...args}></Icon>
);

MoodBad.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MoodBad.argTypes = {
  display,
  appearance,
  size,
  theme,
};
