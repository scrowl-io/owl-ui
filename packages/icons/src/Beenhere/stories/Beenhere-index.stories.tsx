import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBeenhereProps } from '../Beenhere.types';

import { display } from './Beenhere-display.stories';
import { appearance } from './Beenhere-appearance.stories';
import { size } from './Beenhere-size.stories';
import { theme } from './Beenhere-theme.stories';

export const Beenhere = (args: IconsBeenhereProps) => (
  <Icon {...args}></Icon>
);

Beenhere.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Beenhere.argTypes = {
  display,
  appearance,
  size,
  theme,
};
