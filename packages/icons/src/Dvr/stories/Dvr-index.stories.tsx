import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDvrProps } from '../Dvr.types';

import { display } from './Dvr-display.stories';
import { appearance } from './Dvr-appearance.stories';
import { size } from './Dvr-size.stories';
import { theme } from './Dvr-theme.stories';

export const Dvr = (args: IconsDvrProps) => (
  <Icon {...args}></Icon>
);

Dvr.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Dvr.argTypes = {
  display,
  appearance,
  size,
  theme,
};
