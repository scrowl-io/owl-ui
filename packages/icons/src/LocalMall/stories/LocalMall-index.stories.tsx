import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalMallProps } from '../LocalMall.types';

import { display } from './LocalMall-display.stories';
import { appearance } from './LocalMall-appearance.stories';
import { size } from './LocalMall-size.stories';
import { theme } from './LocalMall-theme.stories';

export const LocalMall = (args: IconsLocalMallProps) => (
  <Icon {...args}></Icon>
);

LocalMall.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalMall.argTypes = {
  display,
  appearance,
  size,
  theme,
};
