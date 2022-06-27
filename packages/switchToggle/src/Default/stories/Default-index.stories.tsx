import * as React from 'react';
import { component as SwitchToggle } from '../index';
import { SwitchToggleDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: SwitchToggleDefaultProps) => (
  <SwitchToggle {...args} />
);

Default.args = {
  appearance: appearance.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  label: 'Label',
};

Default.argTypes = {
  appearance,
  size,
  theme,
};
