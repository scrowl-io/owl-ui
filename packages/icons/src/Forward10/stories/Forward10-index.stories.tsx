import * as React from 'react';
import { component as Icon } from '../index';
import { IconsForward10Props } from '../Forward10.types';

import { display } from './Forward10-display.stories';
import { appearance } from './Forward10-appearance.stories';
import { size } from './Forward10-size.stories';
import { theme } from './Forward10-theme.stories';

export const Forward10 = (args: IconsForward10Props) => (
  <Icon {...args}></Icon>
);

Forward10.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Forward10.argTypes = {
  display,
  appearance,
  size,
  theme,
};
