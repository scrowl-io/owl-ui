import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBusinessCenterProps } from '../BusinessCenter.types';

import { display } from './BusinessCenter-display.stories';
import { appearance } from './BusinessCenter-appearance.stories';
import { size } from './BusinessCenter-size.stories';
import { theme } from './BusinessCenter-theme.stories';

export const BusinessCenter = (args: IconsBusinessCenterProps) => (
  <Icon {...args}></Icon>
);

BusinessCenter.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BusinessCenter.argTypes = {
  display,
  appearance,
  size,
  theme,
};
