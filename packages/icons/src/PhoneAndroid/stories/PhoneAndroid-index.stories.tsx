import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhoneAndroidProps } from '../PhoneAndroid.types';

import { display } from './PhoneAndroid-display.stories';
import { appearance } from './PhoneAndroid-appearance.stories';
import { size } from './PhoneAndroid-size.stories';
import { theme } from './PhoneAndroid-theme.stories';

export const PhoneAndroid = (args: IconsPhoneAndroidProps) => (
  <Icon {...args}></Icon>
);

PhoneAndroid.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhoneAndroid.argTypes = {
  display,
  appearance,
  size,
  theme,
};
