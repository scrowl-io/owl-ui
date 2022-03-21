import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDialerSipProps } from '../DialerSip.types';

import { display } from './DialerSip-display.stories';
import { appearance } from './DialerSip-appearance.stories';
import { size } from './DialerSip-size.stories';
import { theme } from './DialerSip-theme.stories';

export const DialerSip = (args: IconsDialerSipProps) => (
  <Icon {...args}></Icon>
);

DialerSip.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DialerSip.argTypes = {
  display,
  appearance,
  size,
  theme,
};
