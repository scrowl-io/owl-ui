import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCenterFocusWeakProps } from '../CenterFocusWeak.types';

import { display } from './CenterFocusWeak-display.stories';
import { appearance } from './CenterFocusWeak-appearance.stories';
import { size } from './CenterFocusWeak-size.stories';
import { theme } from './CenterFocusWeak-theme.stories';

export const CenterFocusWeak = (args: IconsCenterFocusWeakProps) => (
  <Icon {...args}></Icon>
);

CenterFocusWeak.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CenterFocusWeak.argTypes = {
  display,
  appearance,
  size,
  theme,
};
