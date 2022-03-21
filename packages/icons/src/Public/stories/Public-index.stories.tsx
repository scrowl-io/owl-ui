import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPublicProps } from '../Public.types';

import { display } from './Public-display.stories';
import { appearance } from './Public-appearance.stories';
import { size } from './Public-size.stories';
import { theme } from './Public-theme.stories';

export const Public = (args: IconsPublicProps) => (
  <Icon {...args}></Icon>
);

Public.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Public.argTypes = {
  display,
  appearance,
  size,
  theme,
};
