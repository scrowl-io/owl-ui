import * as React from 'react';
import { component as Icon } from '../index';
import { IconsViewModuleProps } from '../ViewModule.types';

import { display } from './ViewModule-display.stories';
import { appearance } from './ViewModule-appearance.stories';
import { size } from './ViewModule-size.stories';
import { theme } from './ViewModule-theme.stories';

export const ViewModule = (args: IconsViewModuleProps) => (
  <Icon {...args}></Icon>
);

ViewModule.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ViewModule.argTypes = {
  display,
  appearance,
  size,
  theme,
};
