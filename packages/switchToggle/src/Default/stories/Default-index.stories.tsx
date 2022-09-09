import * as React from 'react';
import { SwitchToggle } from '../index';
import { SwitchToggleDefaultProps } from '../Default.types';

import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';

const inputProps = {
  label: {
    content: 'Switch',
    htmlFor: 'switch',
  },
  control: {
    id: 'switch',
    value: false,
    name: 'group1',
    test: 'something',
    type: 'switch',
  },
};

export const Default = (args: SwitchToggleDefaultProps) => (
  <SwitchToggle {...args} />
);

Default.args = {
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
  label: 'Label',
  inputProps: inputProps,
};

Default.argTypes = {
  pxScale,
  theme,
};
