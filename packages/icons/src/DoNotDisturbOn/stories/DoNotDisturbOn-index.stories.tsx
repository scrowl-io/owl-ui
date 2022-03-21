import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDoNotDisturbOnProps } from '../DoNotDisturbOn.types';

import { display } from './DoNotDisturbOn-display.stories';
import { appearance } from './DoNotDisturbOn-appearance.stories';
import { size } from './DoNotDisturbOn-size.stories';
import { theme } from './DoNotDisturbOn-theme.stories';

export const DoNotDisturbOn = (args: IconsDoNotDisturbOnProps) => (
  <Icon {...args}></Icon>
);

DoNotDisturbOn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DoNotDisturbOn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
