import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHelpOutlineProps } from '../HelpOutline.types';

import { appearance } from './HelpOutline-appearance.stories';
import { size } from './HelpOutline-size.stories';
import { theme } from './HelpOutline-theme.stories';

export const HelpOutline = (args: IconsHelpOutlineProps) => (
  <Icon {...args}></Icon>
);

HelpOutline.args = {
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

HelpOutline.argTypes = {
  appearance,
  size,
  theme,
};
