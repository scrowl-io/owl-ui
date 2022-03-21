import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCancelProps } from '../Cancel.types';

import { display } from './Cancel-display.stories';
import { appearance } from './Cancel-appearance.stories';
import { size } from './Cancel-size.stories';
import { theme } from './Cancel-theme.stories';

export const Cancel = (args: IconsCancelProps) => (
  <Icon {...args}></Icon>
);

Cancel.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Cancel.argTypes = {
  display,
  appearance,
  size,
  theme,
};
