import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDescriptionProps } from '../Description.types';

import { appearance } from './Description-appearance.stories';
import { size } from './Description-size.stories';
import { theme } from './Description-theme.stories';

export const Description = (args: IconsDescriptionProps) => (
  <Icon {...args}></Icon>
);

Description.args = {
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Description.argTypes = {
  appearance,
  size,
  theme,
};
