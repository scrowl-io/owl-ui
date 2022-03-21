import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHighQualityProps } from '../HighQuality.types';

import { display } from './HighQuality-display.stories';
import { appearance } from './HighQuality-appearance.stories';
import { size } from './HighQuality-size.stories';
import { theme } from './HighQuality-theme.stories';

export const HighQuality = (args: IconsHighQualityProps) => (
  <Icon {...args}></Icon>
);

HighQuality.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

HighQuality.argTypes = {
  display,
  appearance,
  size,
  theme,
};
