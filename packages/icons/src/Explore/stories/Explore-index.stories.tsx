import * as React from 'react';
import { component as Icon } from '../index';
import { IconsExploreProps } from '../Explore.types';

import { display } from './Explore-display.stories';
import { appearance } from './Explore-appearance.stories';
import { size } from './Explore-size.stories';
import { theme } from './Explore-theme.stories';

export const Explore = (args: IconsExploreProps) => (
  <Icon {...args}></Icon>
);

Explore.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Explore.argTypes = {
  display,
  appearance,
  size,
  theme,
};
