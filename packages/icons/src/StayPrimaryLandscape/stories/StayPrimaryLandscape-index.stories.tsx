import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStayPrimaryLandscapeProps } from '../StayPrimaryLandscape.types';

import { display } from './StayPrimaryLandscape-display.stories';
import { appearance } from './StayPrimaryLandscape-appearance.stories';
import { size } from './StayPrimaryLandscape-size.stories';
import { theme } from './StayPrimaryLandscape-theme.stories';

export const StayPrimaryLandscape = (args: IconsStayPrimaryLandscapeProps) => (
  <Icon {...args}></Icon>
);

StayPrimaryLandscape.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

StayPrimaryLandscape.argTypes = {
  display,
  appearance,
  size,
  theme,
};
