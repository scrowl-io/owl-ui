import * as React from 'react';
import { component as Icon } from '../index';
import { IconsInfoOutlineProps } from '../InfoOutline.types';

import { display } from './InfoOutline-display.stories';
import { appearance } from './InfoOutline-appearance.stories';
import { size } from './InfoOutline-size.stories';
import { theme } from './InfoOutline-theme.stories';

export const InfoOutline = (args: IconsInfoOutlineProps) => (
  <Icon {...args}></Icon>
);

InfoOutline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

InfoOutline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
