import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDesktopMacProps } from '../DesktopMac.types';

import { display } from './DesktopMac-display.stories';
import { appearance } from './DesktopMac-appearance.stories';
import { size } from './DesktopMac-size.stories';
import { theme } from './DesktopMac-theme.stories';

export const DesktopMac = (args: IconsDesktopMacProps) => (
  <Icon {...args}></Icon>
);

DesktopMac.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DesktopMac.argTypes = {
  display,
  appearance,
  size,
  theme,
};
