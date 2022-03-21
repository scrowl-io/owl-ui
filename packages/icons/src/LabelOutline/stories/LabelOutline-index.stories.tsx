import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLabelOutlineProps } from '../LabelOutline.types';

import { display } from './LabelOutline-display.stories';
import { appearance } from './LabelOutline-appearance.stories';
import { size } from './LabelOutline-size.stories';
import { theme } from './LabelOutline-theme.stories';

export const LabelOutline = (args: IconsLabelOutlineProps) => (
  <Icon {...args}></Icon>
);

LabelOutline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LabelOutline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
