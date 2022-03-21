import * as React from 'react';
import { component as Icon } from '../index';
import { IconsViewStreamProps } from '../ViewStream.types';

import { display } from './ViewStream-display.stories';
import { appearance } from './ViewStream-appearance.stories';
import { size } from './ViewStream-size.stories';
import { theme } from './ViewStream-theme.stories';

export const ViewStream = (args: IconsViewStreamProps) => (
  <Icon {...args}></Icon>
);

ViewStream.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ViewStream.argTypes = {
  display,
  appearance,
  size,
  theme,
};
