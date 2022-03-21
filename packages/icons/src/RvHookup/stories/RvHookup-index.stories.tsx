import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRvHookupProps } from '../RvHookup.types';

import { display } from './RvHookup-display.stories';
import { appearance } from './RvHookup-appearance.stories';
import { size } from './RvHookup-size.stories';
import { theme } from './RvHookup-theme.stories';

export const RvHookup = (args: IconsRvHookupProps) => (
  <Icon {...args}></Icon>
);

RvHookup.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RvHookup.argTypes = {
  display,
  appearance,
  size,
  theme,
};
