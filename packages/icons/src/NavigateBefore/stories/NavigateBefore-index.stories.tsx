import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNavigateBeforeProps } from '../NavigateBefore.types';

import { display } from './NavigateBefore-display.stories';
import { appearance } from './NavigateBefore-appearance.stories';
import { size } from './NavigateBefore-size.stories';
import { theme } from './NavigateBefore-theme.stories';

export const NavigateBefore = (args: IconsNavigateBeforeProps) => (
  <Icon {...args}></Icon>
);

NavigateBefore.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NavigateBefore.argTypes = {
  display,
  appearance,
  size,
  theme,
};
