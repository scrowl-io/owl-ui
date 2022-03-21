import * as React from 'react';
import { component as Icon } from '../index';
import { IconsReceiptProps } from '../Receipt.types';

import { display } from './Receipt-display.stories';
import { appearance } from './Receipt-appearance.stories';
import { size } from './Receipt-size.stories';
import { theme } from './Receipt-theme.stories';

export const Receipt = (args: IconsReceiptProps) => (
  <Icon {...args}></Icon>
);

Receipt.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Receipt.argTypes = {
  display,
  appearance,
  size,
  theme,
};
