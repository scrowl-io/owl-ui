import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRedeemProps } from '../Redeem.types';

import { display } from './Redeem-display.stories';
import { appearance } from './Redeem-appearance.stories';
import { size } from './Redeem-size.stories';
import { theme } from './Redeem-theme.stories';

export const Redeem = (args: IconsRedeemProps) => (
  <Icon {...args}></Icon>
);

Redeem.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Redeem.argTypes = {
  display,
  appearance,
  size,
  theme,
};
