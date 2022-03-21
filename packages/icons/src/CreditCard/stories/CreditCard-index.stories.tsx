import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCreditCardProps } from '../CreditCard.types';

import { display } from './CreditCard-display.stories';
import { appearance } from './CreditCard-appearance.stories';
import { size } from './CreditCard-size.stories';
import { theme } from './CreditCard-theme.stories';

export const CreditCard = (args: IconsCreditCardProps) => (
  <Icon {...args}></Icon>
);

CreditCard.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CreditCard.argTypes = {
  display,
  appearance,
  size,
  theme,
};
