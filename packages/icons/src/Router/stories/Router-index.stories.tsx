import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRouterProps } from '../Router.types';

import { display } from './Router-display.stories';
import { appearance } from './Router-appearance.stories';
import { size } from './Router-size.stories';
import { theme } from './Router-theme.stories';

export const Router = (args: IconsRouterProps) => (
  <Icon {...args}></Icon>
);

Router.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Router.argTypes = {
  display,
  appearance,
  size,
  theme,
};
