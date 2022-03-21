import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLightbulbOutlineProps } from '../LightbulbOutline.types';

import { display } from './LightbulbOutline-display.stories';
import { appearance } from './LightbulbOutline-appearance.stories';
import { size } from './LightbulbOutline-size.stories';
import { theme } from './LightbulbOutline-theme.stories';

export const LightbulbOutline = (args: IconsLightbulbOutlineProps) => (
  <Icon {...args}></Icon>
);

LightbulbOutline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LightbulbOutline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
