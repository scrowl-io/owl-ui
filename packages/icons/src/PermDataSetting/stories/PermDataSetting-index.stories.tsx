import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPermDataSettingProps } from '../PermDataSetting.types';

import { display } from './PermDataSetting-display.stories';
import { appearance } from './PermDataSetting-appearance.stories';
import { size } from './PermDataSetting-size.stories';
import { theme } from './PermDataSetting-theme.stories';

export const PermDataSetting = (args: IconsPermDataSettingProps) => (
  <Icon {...args}></Icon>
);

PermDataSetting.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PermDataSetting.argTypes = {
  display,
  appearance,
  size,
  theme,
};
