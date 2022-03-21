import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTuneProps } from '../Tune.types';

import { display } from './Tune-display.stories';
import { appearance } from './Tune-appearance.stories';
import { size } from './Tune-size.stories';
import { theme } from './Tune-theme.stories';

export const Tune = (args: IconsTuneProps) => (
  <Icon {...args}></Icon>
);

Tune.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Tune.argTypes = {
  display,
  appearance,
  size,
  theme,
};
