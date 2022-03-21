import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMoreVertProps } from '../MoreVert.types';

import { display } from './MoreVert-display.stories';
import { appearance } from './MoreVert-appearance.stories';
import { size } from './MoreVert-size.stories';
import { theme } from './MoreVert-theme.stories';

export const MoreVert = (args: IconsMoreVertProps) => (
  <Icon {...args}></Icon>
);

MoreVert.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MoreVert.argTypes = {
  display,
  appearance,
  size,
  theme,
};
