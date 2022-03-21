import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPaymentProps } from '../Payment.types';

import { display } from './Payment-display.stories';
import { appearance } from './Payment-appearance.stories';
import { size } from './Payment-size.stories';
import { theme } from './Payment-theme.stories';

export const Payment = (args: IconsPaymentProps) => (
  <Icon {...args}></Icon>
);

Payment.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Payment.argTypes = {
  display,
  appearance,
  size,
  theme,
};
