import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWarningProps } from '../Warning.types';

import { display } from './Warning-display.stories';
import { appearance } from './Warning-appearance.stories';
import { size } from './Warning-size.stories';
import { theme } from './Warning-theme.stories';

export const Warning = (args: IconsWarningProps) => (
  <Icon {...args}></Icon>
);

Warning.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Warning.argTypes = {
  display,
  appearance,
  size,
  theme,
};
