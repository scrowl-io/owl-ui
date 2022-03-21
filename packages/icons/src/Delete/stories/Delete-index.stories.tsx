import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDeleteProps } from '../Delete.types';

import { display } from './Delete-display.stories';
import { appearance } from './Delete-appearance.stories';
import { size } from './Delete-size.stories';
import { theme } from './Delete-theme.stories';

export const Delete = (args: IconsDeleteProps) => (
  <Icon {...args}></Icon>
);

Delete.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Delete.argTypes = {
  display,
  appearance,
  size,
  theme,
};
