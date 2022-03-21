import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCreateProps } from '../Create.types';

import { display } from './Create-display.stories';
import { appearance } from './Create-appearance.stories';
import { size } from './Create-size.stories';
import { theme } from './Create-theme.stories';

export const Create = (args: IconsCreateProps) => (
  <Icon {...args}></Icon>
);

Create.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Create.argTypes = {
  display,
  appearance,
  size,
  theme,
};
