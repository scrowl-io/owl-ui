import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAddAlertProps } from '../AddAlert.types';

import { display } from './AddAlert-display.stories';
import { appearance } from './AddAlert-appearance.stories';
import { size } from './AddAlert-size.stories';
import { theme } from './AddAlert-theme.stories';

export const AddAlert = (args: IconsAddAlertProps) => (
  <Icon {...args}></Icon>
);

AddAlert.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AddAlert.argTypes = {
  display,
  appearance,
  size,
  theme,
};
