import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrightnessMediumProps } from '../BrightnessMedium.types';

import { display } from './BrightnessMedium-display.stories';
import { appearance } from './BrightnessMedium-appearance.stories';
import { size } from './BrightnessMedium-size.stories';
import { theme } from './BrightnessMedium-theme.stories';

export const BrightnessMedium = (args: IconsBrightnessMediumProps) => (
  <Icon {...args}></Icon>
);

BrightnessMedium.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BrightnessMedium.argTypes = {
  display,
  appearance,
  size,
  theme,
};
