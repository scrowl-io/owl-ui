import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStayCurrentPortraitProps } from '../StayCurrentPortrait.types';

import { display } from './StayCurrentPortrait-display.stories';
import { appearance } from './StayCurrentPortrait-appearance.stories';
import { size } from './StayCurrentPortrait-size.stories';
import { theme } from './StayCurrentPortrait-theme.stories';

export const StayCurrentPortrait = (args: IconsStayCurrentPortraitProps) => (
  <Icon {...args}></Icon>
);

StayCurrentPortrait.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

StayCurrentPortrait.argTypes = {
  display,
  appearance,
  size,
  theme,
};
