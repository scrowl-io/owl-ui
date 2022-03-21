import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPauseProps } from '../Pause.types';

import { display } from './Pause-display.stories';
import { appearance } from './Pause-appearance.stories';
import { size } from './Pause-size.stories';
import { theme } from './Pause-theme.stories';

export const Pause = (args: IconsPauseProps) => (
  <Icon {...args}></Icon>
);

Pause.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Pause.argTypes = {
  display,
  appearance,
  size,
  theme,
};
