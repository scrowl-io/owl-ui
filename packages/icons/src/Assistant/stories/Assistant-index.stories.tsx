import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAssistantProps } from '../Assistant.types';

import { display } from './Assistant-display.stories';
import { appearance } from './Assistant-appearance.stories';
import { size } from './Assistant-size.stories';
import { theme } from './Assistant-theme.stories';

export const Assistant = (args: IconsAssistantProps) => (
  <Icon {...args}></Icon>
);

Assistant.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Assistant.argTypes = {
  display,
  appearance,
  size,
  theme,
};
