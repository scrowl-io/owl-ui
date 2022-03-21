import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPersonProps } from '../Person.types';

import { display } from './Person-display.stories';
import { appearance } from './Person-appearance.stories';
import { size } from './Person-size.stories';
import { theme } from './Person-theme.stories';

export const Person = (args: IconsPersonProps) => (
  <Icon {...args}></Icon>
);

Person.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Person.argTypes = {
  display,
  appearance,
  size,
  theme,
};
