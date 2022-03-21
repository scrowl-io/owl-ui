import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMoneyOffProps } from '../MoneyOff.types';

import { display } from './MoneyOff-display.stories';
import { appearance } from './MoneyOff-appearance.stories';
import { size } from './MoneyOff-size.stories';
import { theme } from './MoneyOff-theme.stories';

export const MoneyOff = (args: IconsMoneyOffProps) => (
  <Icon {...args}></Icon>
);

MoneyOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MoneyOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
