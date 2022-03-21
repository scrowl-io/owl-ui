import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAttachMoneyProps } from '../AttachMoney.types';

import { display } from './AttachMoney-display.stories';
import { appearance } from './AttachMoney-appearance.stories';
import { size } from './AttachMoney-size.stories';
import { theme } from './AttachMoney-theme.stories';

export const AttachMoney = (args: IconsAttachMoneyProps) => (
  <Icon {...args}></Icon>
);

AttachMoney.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AttachMoney.argTypes = {
  display,
  appearance,
  size,
  theme,
};
