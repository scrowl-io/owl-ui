import * as React from 'react';
import { component as Icon } from '../index';
import { IconsViewArrayProps } from '../ViewArray.types';

import { display } from './ViewArray-display.stories';
import { appearance } from './ViewArray-appearance.stories';
import { size } from './ViewArray-size.stories';
import { theme } from './ViewArray-theme.stories';

export const ViewArray = (args: IconsViewArrayProps) => (
  <Icon {...args}></Icon>
);

ViewArray.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ViewArray.argTypes = {
  display,
  appearance,
  size,
  theme,
};
