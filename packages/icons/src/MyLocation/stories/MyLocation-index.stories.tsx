import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMyLocationProps } from '../MyLocation.types';

import { display } from './MyLocation-display.stories';
import { appearance } from './MyLocation-appearance.stories';
import { size } from './MyLocation-size.stories';
import { theme } from './MyLocation-theme.stories';

export const MyLocation = (args: IconsMyLocationProps) => (
  <Icon {...args}></Icon>
);

MyLocation.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MyLocation.argTypes = {
  display,
  appearance,
  size,
  theme,
};
