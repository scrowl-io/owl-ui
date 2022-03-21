import * as React from 'react';
import { component as Icon } from '../index';
import { IconsImportantDevicesProps } from '../ImportantDevices.types';

import { display } from './ImportantDevices-display.stories';
import { appearance } from './ImportantDevices-appearance.stories';
import { size } from './ImportantDevices-size.stories';
import { theme } from './ImportantDevices-theme.stories';

export const ImportantDevices = (args: IconsImportantDevicesProps) => (
  <Icon {...args}></Icon>
);

ImportantDevices.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ImportantDevices.argTypes = {
  display,
  appearance,
  size,
  theme,
};
