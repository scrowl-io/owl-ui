import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStayCurrentLandscapeProps } from '../StayCurrentLandscape.types';

import { display } from './StayCurrentLandscape-display.stories';
import { appearance } from './StayCurrentLandscape-appearance.stories';
import { size } from './StayCurrentLandscape-size.stories';
import { theme } from './StayCurrentLandscape-theme.stories';

export const StayCurrentLandscape = (args: IconsStayCurrentLandscapeProps) => (
  <Icon {...args}></Icon>
);

StayCurrentLandscape.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

StayCurrentLandscape.argTypes = {
  display,
  appearance,
  size,
  theme,
};
