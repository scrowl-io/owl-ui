import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSwitchCameraProps } from '../SwitchCamera.types';

import { display } from './SwitchCamera-display.stories';
import { appearance } from './SwitchCamera-appearance.stories';
import { size } from './SwitchCamera-size.stories';
import { theme } from './SwitchCamera-theme.stories';

export const SwitchCamera = (args: IconsSwitchCameraProps) => (
  <Icon {...args}></Icon>
);

SwitchCamera.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SwitchCamera.argTypes = {
  display,
  appearance,
  size,
  theme,
};
