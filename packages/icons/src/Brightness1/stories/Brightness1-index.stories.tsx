import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrightness1Props } from '../Brightness1.types';

import { display } from './Brightness1-display.stories';
import { appearance } from './Brightness1-appearance.stories';
import { size } from './Brightness1-size.stories';
import { theme } from './Brightness1-theme.stories';

export const Brightness1 = (args: IconsBrightness1Props) => (
  <Icon {...args}></Icon>
);

Brightness1.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Brightness1.argTypes = {
  display,
  appearance,
  size,
  theme,
};
