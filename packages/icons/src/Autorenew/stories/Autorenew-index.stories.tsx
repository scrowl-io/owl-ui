import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAutorenewProps } from '../Autorenew.types';

import { display } from './Autorenew-display.stories';
import { appearance } from './Autorenew-appearance.stories';
import { size } from './Autorenew-size.stories';
import { theme } from './Autorenew-theme.stories';

export const Autorenew = (args: IconsAutorenewProps) => (
  <Icon {...args}></Icon>
);

Autorenew.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Autorenew.argTypes = {
  display,
  appearance,
  size,
  theme,
};
