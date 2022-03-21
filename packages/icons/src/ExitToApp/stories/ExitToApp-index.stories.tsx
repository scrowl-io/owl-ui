import * as React from 'react';
import { component as Icon } from '../index';
import { IconsExitToAppProps } from '../ExitToApp.types';

import { display } from './ExitToApp-display.stories';
import { appearance } from './ExitToApp-appearance.stories';
import { size } from './ExitToApp-size.stories';
import { theme } from './ExitToApp-theme.stories';

export const ExitToApp = (args: IconsExitToAppProps) => (
  <Icon {...args}></Icon>
);

ExitToApp.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ExitToApp.argTypes = {
  display,
  appearance,
  size,
  theme,
};
