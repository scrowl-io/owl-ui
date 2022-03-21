import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNfcProps } from '../Nfc.types';

import { display } from './Nfc-display.stories';
import { appearance } from './Nfc-appearance.stories';
import { size } from './Nfc-size.stories';
import { theme } from './Nfc-theme.stories';

export const Nfc = (args: IconsNfcProps) => (
  <Icon {...args}></Icon>
);

Nfc.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Nfc.argTypes = {
  display,
  appearance,
  size,
  theme,
};
