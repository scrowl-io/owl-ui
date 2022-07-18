import * as React from 'react';
import { SwitchToggle } from '../index';
import { SwitchToggleDefaultProps } from '../Default.types';

import { size } from './Default-size.stories';
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
    // unlike other field types, 'name' is used to group multiple checkboxes. This allows for grouped radio buttons, where the user can only select one option out of a larger colleciton
  },
};

export const Default = (args: SwitchToggleDefaultProps) => (
  <SwitchToggle {...args} />
);

Default.args = {
  size: size.defaultValue,
  theme: theme.defaultValue,
  label: 'Label',
  inputProps: inputProps,
};

Default.argTypes = {
  size,
  theme,
};
