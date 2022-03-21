import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSimCardAlertProps } from '../SimCardAlert.types';

import { display } from './SimCardAlert-display.stories';
import { appearance } from './SimCardAlert-appearance.stories';
import { size } from './SimCardAlert-size.stories';
import { theme } from './SimCardAlert-theme.stories';

export const SimCardAlert = (args: IconsSimCardAlertProps) => (
  <Icon {...args}></Icon>
);

SimCardAlert.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SimCardAlert.argTypes = {
  display,
  appearance,
  size,
  theme,
};
