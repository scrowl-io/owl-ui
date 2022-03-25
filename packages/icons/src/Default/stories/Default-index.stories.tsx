import * as React from 'react';
import { component as Icons } from '../index';
import { IconsDefaultProps } from '../Default.types';

import { icon } from './Default-icon.stories';
import { display } from './Default-display.stories';
import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: IconsDefaultProps) => <Icons {...args} />;

Default.args = {
  icon: icon.defaultValue,
  display: display.defaultValue,
  appearance: '',
  size: 'Lg',
  theme: 'Default',
};

Default.argTypes = {
  icon,
  display,
  appearance,
  size,
  theme,
};
