import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilterCenterFocusProps } from '../FilterCenterFocus.types';

import { display } from './FilterCenterFocus-display.stories';
import { appearance } from './FilterCenterFocus-appearance.stories';
import { size } from './FilterCenterFocus-size.stories';
import { theme } from './FilterCenterFocus-theme.stories';

export const FilterCenterFocus = (args: IconsFilterCenterFocusProps) => (
  <Icon {...args}></Icon>
);

FilterCenterFocus.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FilterCenterFocus.argTypes = {
  display,
  appearance,
  size,
  theme,
};
