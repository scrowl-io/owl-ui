import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPetsProps } from '../Pets.types';

import { display } from './Pets-display.stories';
import { appearance } from './Pets-appearance.stories';
import { size } from './Pets-size.stories';
import { theme } from './Pets-theme.stories';

export const Pets = (args: IconsPetsProps) => (
  <Icon {...args}></Icon>
);

Pets.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Pets.argTypes = {
  display,
  appearance,
  size,
  theme,
};
