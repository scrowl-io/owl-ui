import * as React from 'react';
import { Icon } from '../index';
import { IconsDefaultProps } from '../Default.types';

import { icon } from './Default-icon.stories';
import { display } from './Default-display.stories';
import { filled } from './Default-filled.stories';
import { appearance } from './Default-appearance.stories';
import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: IconsDefaultProps) => <Icon {...args} />;

Default.args = {
  icon: icon.defaultValue,
  display: display.defaultValue,
  filled: filled.defaultValue,
  appearance: appearance.defaultValue,
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
};

Default.argTypes = {
  icon,
  display,
  filled,
  appearance,
  pxScale,
  theme,
};
