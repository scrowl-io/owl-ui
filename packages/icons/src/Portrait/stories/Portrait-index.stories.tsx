import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPortraitProps } from '../Portrait.types';

import { display } from './Portrait-display.stories';
import { appearance } from './Portrait-appearance.stories';
import { size } from './Portrait-size.stories';
import { theme } from './Portrait-theme.stories';

export const Portrait = (args: IconsPortraitProps) => (
  <Icon {...args}></Icon>
);

Portrait.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Portrait.argTypes = {
  display,
  appearance,
  size,
  theme,
};
