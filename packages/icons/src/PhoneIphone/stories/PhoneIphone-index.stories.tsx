import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhoneIphoneProps } from '../PhoneIphone.types';

import { display } from './PhoneIphone-display.stories';
import { appearance } from './PhoneIphone-appearance.stories';
import { size } from './PhoneIphone-size.stories';
import { theme } from './PhoneIphone-theme.stories';

export const PhoneIphone = (args: IconsPhoneIphoneProps) => (
  <Icon {...args}></Icon>
);

PhoneIphone.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhoneIphone.argTypes = {
  display,
  appearance,
  size,
  theme,
};
