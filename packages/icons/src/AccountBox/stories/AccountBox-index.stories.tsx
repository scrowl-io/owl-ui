import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAccountBoxProps } from '../AccountBox.types';

import { display } from './AccountBox-display.stories';
import { appearance } from './AccountBox-appearance.stories';
import { size } from './AccountBox-size.stories';
import { theme } from './AccountBox-theme.stories';

export const AccountBox = (args: IconsAccountBoxProps) => (
  <Icon {...args}></Icon>
);

AccountBox.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AccountBox.argTypes = {
  display,
  appearance,
  size,
  theme,
};
