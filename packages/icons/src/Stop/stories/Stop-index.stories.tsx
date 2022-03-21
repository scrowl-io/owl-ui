import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStopProps } from '../Stop.types';

import { display } from './Stop-display.stories';
import { appearance } from './Stop-appearance.stories';
import { size } from './Stop-size.stories';
import { theme } from './Stop-theme.stories';

export const Stop = (args: IconsStopProps) => (
  <Icon {...args}></Icon>
);

Stop.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Stop.argTypes = {
  display,
  appearance,
  size,
  theme,
};
