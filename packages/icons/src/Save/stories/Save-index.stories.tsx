import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSaveProps } from '../Save.types';

import { display } from './Save-display.stories';
import { appearance } from './Save-appearance.stories';
import { size } from './Save-size.stories';
import { theme } from './Save-theme.stories';

export const Save = (args: IconsSaveProps) => (
  <Icon {...args}></Icon>
);

Save.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Save.argTypes = {
  display,
  appearance,
  size,
  theme,
};
