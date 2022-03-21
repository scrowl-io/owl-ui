import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCenterFocusStrongProps } from '../CenterFocusStrong.types';

import { display } from './CenterFocusStrong-display.stories';
import { appearance } from './CenterFocusStrong-appearance.stories';
import { size } from './CenterFocusStrong-size.stories';
import { theme } from './CenterFocusStrong-theme.stories';

export const CenterFocusStrong = (args: IconsCenterFocusStrongProps) => (
  <Icon {...args}></Icon>
);

CenterFocusStrong.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CenterFocusStrong.argTypes = {
  display,
  appearance,
  size,
  theme,
};
