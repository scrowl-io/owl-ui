import * as React from 'react';
import { component as Icon } from '../index';
import { IconsShortTextProps } from '../ShortText.types';

import { display } from './ShortText-display.stories';
import { appearance } from './ShortText-appearance.stories';
import { size } from './ShortText-size.stories';
import { theme } from './ShortText-theme.stories';

export const ShortText = (args: IconsShortTextProps) => (
  <Icon {...args}></Icon>
);

ShortText.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ShortText.argTypes = {
  display,
  appearance,
  size,
  theme,
};
