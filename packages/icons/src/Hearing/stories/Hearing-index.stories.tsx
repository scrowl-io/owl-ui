import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHearingProps } from '../Hearing.types';

import { display } from './Hearing-display.stories';
import { appearance } from './Hearing-appearance.stories';
import { size } from './Hearing-size.stories';
import { theme } from './Hearing-theme.stories';

export const Hearing = (args: IconsHearingProps) => (
  <Icon {...args}></Icon>
);

Hearing.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Hearing.argTypes = {
  display,
  appearance,
  size,
  theme,
};
