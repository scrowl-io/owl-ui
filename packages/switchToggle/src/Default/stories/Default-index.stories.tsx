import * as React from 'react';
import { component as SwitchToggle } from '../index';
import { Form } from 'react-bootstrap';
import { SwitchToggleDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: SwitchToggleDefaultProps) => (
  <Form>
    <SwitchToggle {...args} />
  </Form>
);

Default.args = {
  appearance: 'Default',
  size: 'Lg',
  theme: 'Default',
  label: 'Label',
};

Default.argTypes = {
  appearance,
  size,
  theme,
};
