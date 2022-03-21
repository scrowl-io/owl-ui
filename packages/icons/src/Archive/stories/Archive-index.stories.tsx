import * as React from 'react';
import { component as Icon } from '../index';
import { IconsArchiveProps } from '../Archive.types';

import { display } from './Archive-display.stories';
import { appearance } from './Archive-appearance.stories';
import { size } from './Archive-size.stories';
import { theme } from './Archive-theme.stories';

export const Archive = (args: IconsArchiveProps) => (
  <Icon {...args}></Icon>
);

Archive.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Archive.argTypes = {
  display,
  appearance,
  size,
  theme,
};
