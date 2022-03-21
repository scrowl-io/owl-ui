import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTabletAndroidProps } from '../TabletAndroid.types';

import { display } from './TabletAndroid-display.stories';
import { appearance } from './TabletAndroid-appearance.stories';
import { size } from './TabletAndroid-size.stories';
import { theme } from './TabletAndroid-theme.stories';

export const TabletAndroid = (args: IconsTabletAndroidProps) => (
  <Icon {...args}></Icon>
);

TabletAndroid.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TabletAndroid.argTypes = {
  display,
  appearance,
  size,
  theme,
};
