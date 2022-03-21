import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWorkProps } from '../Work.types';

import { display } from './Work-display.stories';
import { appearance } from './Work-appearance.stories';
import { size } from './Work-size.stories';
import { theme } from './Work-theme.stories';

export const Work = (args: IconsWorkProps) => (
  <Icon {...args}></Icon>
);

Work.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Work.argTypes = {
  display,
  appearance,
  size,
  theme,
};
