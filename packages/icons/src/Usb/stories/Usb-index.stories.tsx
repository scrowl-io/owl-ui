import * as React from 'react';
import { component as Icon } from '../index';
import { IconsUsbProps } from '../Usb.types';

import { display } from './Usb-display.stories';
import { appearance } from './Usb-appearance.stories';
import { size } from './Usb-size.stories';
import { theme } from './Usb-theme.stories';

export const Usb = (args: IconsUsbProps) => (
  <Icon {...args}></Icon>
);

Usb.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Usb.argTypes = {
  display,
  appearance,
  size,
  theme,
};
