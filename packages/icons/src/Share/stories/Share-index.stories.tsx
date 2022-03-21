import * as React from 'react';
import { component as Icon } from '../index';
import { IconsShareProps } from '../Share.types';

import { display } from './Share-display.stories';
import { appearance } from './Share-appearance.stories';
import { size } from './Share-size.stories';
import { theme } from './Share-theme.stories';

export const Share = (args: IconsShareProps) => (
  <Icon {...args}></Icon>
);

Share.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Share.argTypes = {
  display,
  appearance,
  size,
  theme,
};
