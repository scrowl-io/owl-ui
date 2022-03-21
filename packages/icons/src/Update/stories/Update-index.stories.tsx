import * as React from 'react';
import { component as Icon } from '../index';
import { IconsUpdateProps } from '../Update.types';

import { display } from './Update-display.stories';
import { appearance } from './Update-appearance.stories';
import { size } from './Update-size.stories';
import { theme } from './Update-theme.stories';

export const Update = (args: IconsUpdateProps) => (
  <Icon {...args}></Icon>
);

Update.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Update.argTypes = {
  display,
  appearance,
  size,
  theme,
};
