import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWbAutoProps } from '../WbAuto.types';

import { display } from './WbAuto-display.stories';
import { appearance } from './WbAuto-appearance.stories';
import { size } from './WbAuto-size.stories';
import { theme } from './WbAuto-theme.stories';

export const WbAuto = (args: IconsWbAutoProps) => (
  <Icon {...args}></Icon>
);

WbAuto.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

WbAuto.argTypes = {
  display,
  appearance,
  size,
  theme,
};
