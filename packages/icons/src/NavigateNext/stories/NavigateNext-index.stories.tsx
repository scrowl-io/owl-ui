import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNavigateNextProps } from '../NavigateNext.types';

import { display } from './NavigateNext-display.stories';
import { appearance } from './NavigateNext-appearance.stories';
import { size } from './NavigateNext-size.stories';
import { theme } from './NavigateNext-theme.stories';

export const NavigateNext = (args: IconsNavigateNextProps) => (
  <Icon {...args}></Icon>
);

NavigateNext.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NavigateNext.argTypes = {
  display,
  appearance,
  size,
  theme,
};
