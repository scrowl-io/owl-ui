import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMergeTypeProps } from '../MergeType.types';

import { display } from './MergeType-display.stories';
import { appearance } from './MergeType-appearance.stories';
import { size } from './MergeType-size.stories';
import { theme } from './MergeType-theme.stories';

export const MergeType = (args: IconsMergeTypeProps) => (
  <Icon {...args}></Icon>
);

MergeType.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MergeType.argTypes = {
  display,
  appearance,
  size,
  theme,
};
