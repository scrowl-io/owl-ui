import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNoEncryptionProps } from '../NoEncryption.types';

import { display } from './NoEncryption-display.stories';
import { appearance } from './NoEncryption-appearance.stories';
import { size } from './NoEncryption-size.stories';
import { theme } from './NoEncryption-theme.stories';

export const NoEncryption = (args: IconsNoEncryptionProps) => (
  <Icon {...args}></Icon>
);

NoEncryption.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NoEncryption.argTypes = {
  display,
  appearance,
  size,
  theme,
};
