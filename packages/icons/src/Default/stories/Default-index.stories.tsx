import * as React from 'react';
import { Icon } from '../index';
import { IconsDefaultProps } from '../Default.types';

import { icon } from './Default-icon.stories';
import { display } from './Default-display.stories';
import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: IconsDefaultProps) => <Icon {...args} />;

Default.args = {
  icon: icon.defaultValue,
  display: display.defaultValue,
  appearance: appearance.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
};

Default.argTypes = {
  icon,
  display,
  appearance,
  size,
  theme,
};
