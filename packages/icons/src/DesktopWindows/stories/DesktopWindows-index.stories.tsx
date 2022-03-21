import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDesktopWindowsProps } from '../DesktopWindows.types';

import { display } from './DesktopWindows-display.stories';
import { appearance } from './DesktopWindows-appearance.stories';
import { size } from './DesktopWindows-size.stories';
import { theme } from './DesktopWindows-theme.stories';

export const DesktopWindows = (args: IconsDesktopWindowsProps) => (
  <Icon {...args}></Icon>
);

DesktopWindows.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DesktopWindows.argTypes = {
  display,
  appearance,
  size,
  theme,
};
