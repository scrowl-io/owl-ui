import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhoneForwardedProps } from '../PhoneForwarded.types';

import { display } from './PhoneForwarded-display.stories';
import { appearance } from './PhoneForwarded-appearance.stories';
import { size } from './PhoneForwarded-size.stories';
import { theme } from './PhoneForwarded-theme.stories';

export const PhoneForwarded = (args: IconsPhoneForwardedProps) => (
  <Icon {...args}></Icon>
);

PhoneForwarded.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhoneForwarded.argTypes = {
  display,
  appearance,
  size,
  theme,
};
