import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHdrStrongProps } from '../HdrStrong.types';

import { display } from './HdrStrong-display.stories';
import { appearance } from './HdrStrong-appearance.stories';
import { size } from './HdrStrong-size.stories';
import { theme } from './HdrStrong-theme.stories';

export const HdrStrong = (args: IconsHdrStrongProps) => (
  <Icon {...args}></Icon>
);

HdrStrong.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

HdrStrong.argTypes = {
  display,
  appearance,
  size,
  theme,
};
