import * as React from 'react';
import { component as Icon } from '../index';
import { IconsEnhancedEncryptionProps } from '../EnhancedEncryption.types';

import { display } from './EnhancedEncryption-display.stories';
import { appearance } from './EnhancedEncryption-appearance.stories';
import { size } from './EnhancedEncryption-size.stories';
import { theme } from './EnhancedEncryption-theme.stories';

export const EnhancedEncryption = (args: IconsEnhancedEncryptionProps) => (
  <Icon {...args}></Icon>
);

EnhancedEncryption.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

EnhancedEncryption.argTypes = {
  display,
  appearance,
  size,
  theme,
};
