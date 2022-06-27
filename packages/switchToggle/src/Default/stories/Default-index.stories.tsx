import * as React from 'react';
import { SwitchToggle } from '../index';
import { SwitchToggleDefaultProps } from '../Default.types';

import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: SwitchToggleDefaultProps) => (
  <SwitchToggle {...args} />
);

Default.args = {
  size: size.defaultValue,
  theme: theme.defaultValue,
  label: 'Label',
};

Default.argTypes = {
  size,
  theme,
};
