import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRemoveProps } from '../Remove.types';

import { display } from './Remove-display.stories';
import { appearance } from './Remove-appearance.stories';
import { size } from './Remove-size.stories';
import { theme } from './Remove-theme.stories';

export const Remove = (args: IconsRemoveProps) => (
  <Icon {...args}></Icon>
);

Remove.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Remove.argTypes = {
  display,
  appearance,
  size,
  theme,
};
