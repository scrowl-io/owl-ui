import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHeadsetProps } from '../Headset.types';

import { display } from './Headset-display.stories';
import { appearance } from './Headset-appearance.stories';
import { size } from './Headset-size.stories';
import { theme } from './Headset-theme.stories';

export const Headset = (args: IconsHeadsetProps) => (
  <Icon {...args}></Icon>
);

Headset.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Headset.argTypes = {
  display,
  appearance,
  size,
  theme,
};
