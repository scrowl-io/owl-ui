import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHealingProps } from '../Healing.types';

import { display } from './Healing-display.stories';
import { appearance } from './Healing-appearance.stories';
import { size } from './Healing-size.stories';
import { theme } from './Healing-theme.stories';

export const Healing = (args: IconsHealingProps) => (
  <Icon {...args}></Icon>
);

Healing.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Healing.argTypes = {
  display,
  appearance,
  size,
  theme,
};
