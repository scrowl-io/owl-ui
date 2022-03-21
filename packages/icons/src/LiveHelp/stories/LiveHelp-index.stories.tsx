import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLiveHelpProps } from '../LiveHelp.types';

import { display } from './LiveHelp-display.stories';
import { appearance } from './LiveHelp-appearance.stories';
import { size } from './LiveHelp-size.stories';
import { theme } from './LiveHelp-theme.stories';

export const LiveHelp = (args: IconsLiveHelpProps) => (
  <Icon {...args}></Icon>
);

LiveHelp.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LiveHelp.argTypes = {
  display,
  appearance,
  size,
  theme,
};
