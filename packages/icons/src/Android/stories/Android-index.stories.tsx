import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAndroidProps } from '../Android.types';

import { display } from './Android-display.stories';
import { appearance } from './Android-appearance.stories';
import { size } from './Android-size.stories';
import { theme } from './Android-theme.stories';

export const Android = (args: IconsAndroidProps) => (
  <Icon {...args}></Icon>
);

Android.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Android.argTypes = {
  display,
  appearance,
  size,
  theme,
};
