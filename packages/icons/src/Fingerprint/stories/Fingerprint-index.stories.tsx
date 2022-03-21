import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFingerprintProps } from '../Fingerprint.types';

import { display } from './Fingerprint-display.stories';
import { appearance } from './Fingerprint-appearance.stories';
import { size } from './Fingerprint-size.stories';
import { theme } from './Fingerprint-theme.stories';

export const Fingerprint = (args: IconsFingerprintProps) => (
  <Icon {...args}></Icon>
);

Fingerprint.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Fingerprint.argTypes = {
  display,
  appearance,
  size,
  theme,
};
