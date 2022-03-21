import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWbSunnyProps } from '../WbSunny.types';

import { display } from './WbSunny-display.stories';
import { appearance } from './WbSunny-appearance.stories';
import { size } from './WbSunny-size.stories';
import { theme } from './WbSunny-theme.stories';

export const WbSunny = (args: IconsWbSunnyProps) => (
  <Icon {...args}></Icon>
);

WbSunny.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

WbSunny.argTypes = {
  display,
  appearance,
  size,
  theme,
};
