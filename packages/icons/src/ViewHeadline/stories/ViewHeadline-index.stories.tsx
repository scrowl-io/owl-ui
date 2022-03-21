import * as React from 'react';
import { component as Icon } from '../index';
import { IconsViewHeadlineProps } from '../ViewHeadline.types';

import { display } from './ViewHeadline-display.stories';
import { appearance } from './ViewHeadline-appearance.stories';
import { size } from './ViewHeadline-size.stories';
import { theme } from './ViewHeadline-theme.stories';

export const ViewHeadline = (args: IconsViewHeadlineProps) => (
  <Icon {...args}></Icon>
);

ViewHeadline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ViewHeadline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
