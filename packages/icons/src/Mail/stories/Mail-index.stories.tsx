import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMailProps } from '../Mail.types';

import { display } from './Mail-display.stories';
import { appearance } from './Mail-appearance.stories';
import { size } from './Mail-size.stories';
import { theme } from './Mail-theme.stories';

export const Mail = (args: IconsMailProps) => (
  <Icon {...args}></Icon>
);

Mail.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Mail.argTypes = {
  display,
  appearance,
  size,
  theme,
};
