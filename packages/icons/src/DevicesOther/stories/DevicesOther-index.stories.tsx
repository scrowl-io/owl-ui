import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDevicesOtherProps } from '../DevicesOther.types';

import { display } from './DevicesOther-display.stories';
import { appearance } from './DevicesOther-appearance.stories';
import { size } from './DevicesOther-size.stories';
import { theme } from './DevicesOther-theme.stories';

export const DevicesOther = (args: IconsDevicesOtherProps) => (
  <Icon {...args}></Icon>
);

DevicesOther.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DevicesOther.argTypes = {
  display,
  appearance,
  size,
  theme,
};
