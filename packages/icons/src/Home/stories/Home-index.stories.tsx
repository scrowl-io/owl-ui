import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHomeProps } from '../Home.types';

import { display } from './Home-display.stories';
import { appearance } from './Home-appearance.stories';
import { size } from './Home-size.stories';
import { theme } from './Home-theme.stories';

export const Home = (args: IconsHomeProps) => (
  <Icon {...args}></Icon>
);

Home.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Home.argTypes = {
  display,
  appearance,
  size,
  theme,
};
