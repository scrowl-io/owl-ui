import * as React from 'react';
import { SwitchToggle } from '../index';
import { SwitchToggleDefaultProps } from '../Default.types';

import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';

const label = {
  content: 'Switch',
  htmlFor: 'switch-example',
};

const control = {
  id: 'switch-example',
  value: false,
  name: 'switch-example',
  type: 'switch',
};

export const Default = (args: SwitchToggleDefaultProps) => (
  <SwitchToggle {...args} />
);

Default.args = {
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
  label,
  control,
};

Default.argTypes = {
  pxScale,
  theme,
};
